require("dotenv").config({ path: "../.env" });
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const requestTakeoutExport = require("./takeout"); // Puppeteer script
// const getTakeoutFile = require("./drive"); // Google Drive API script

const app = express();

// Middleware for session handling
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/drive.readonly" // Needed for accessing Google Drive
      ]
    },
    async (accessToken, refreshToken, profile, done) => {
      profile.accessToken = accessToken; // Store OAuth token
      profile.refreshToken = refreshToken; // Store refresh token
      return done(null, profile);
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  async (req, res) => {
    if (!req.user) return res.redirect("/");
    
    console.log("✅ Logged in successfully!");
    await requestTakeoutExport(req.user.accessToken); // Trigger Takeout export
    
    res.send("Takeout request started! It may take a few minutes.");
  }
);

app.get("/logout", (req, res) => {
  req.logout(() => {});
  res.redirect("/");
});

app.get("/dashboard", (req, res) => {
  if (!req.user) return res.redirect("/");
  res.json(req.user); // Show user details
});

// Route to download the Takeout data from Google Drive
app.get("/download-takeout", async (req, res) => {
  if (!req.user) return res.status(401).send("Login required!");

  console.log("🔍 Searching for watch-history.json...");
  await getTakeoutFile(req.user.accessToken);
  res.send("✅ Download started!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
