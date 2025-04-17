require("dotenv").config({ path: "../.env" });
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const fetchTakeoutData = require("./fetchData");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/drive.readonly",
      ],
    },
    async (accessToken, refreshToken, profile, done) => {
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// OAuth routes
app.get("/auth/google", passport.authenticate("google")); // ✅ use strategy-defined scope

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    if (!req.user) return res.redirect("/");
    res.redirect("http://localhost:3000/start-takeout"); // React route
  }
);

// Logout
app.get("/logout", (req, res) => {
  req.logout(() => {});
  res.redirect("/");
});

app.get("/dashboard", (req, res) => {
  if (!req.user) return res.status(401).send("Not logged in");
  res.json(req.user);
});

// Fetch Takeout data from Drive
app.post("/api/fetch-takeout", async (req, res) => {
  if (!req.user) return res.status(401).send("Login required!");

  try {
    console.log("🔍 Fetching Takeout data...");
    const result = await fetchTakeoutData(req.user.accessToken);
    res.status(200).send("✅ Takeout data fetched successfully!");
  } catch (err) {
    console.error("❌ Error fetching Takeout data:", err);
    res.status(500).send("Failed to fetch Takeout data.");
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
