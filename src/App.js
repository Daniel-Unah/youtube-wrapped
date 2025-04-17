import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import TakeoutInstructions from "./takeoutInstructions.js";

const Home = ({ user, onLogout }) => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1 id="header">YouTube Wrapped</h1>
    {!user ? (
      <a href="http://localhost:5000/auth/google">
        <button>Login with Google</button>
      </a>
    ) : (
      <>
        <h2>Welcome, {user.displayName}!</h2>
        <img src={user.photos[0].value} alt="Profile" style={{ borderRadius: "50%" }} />
        <br />
        <Link to="/start-takeout">
          <button style={{ marginTop: "20px" }}>Start Takeout Export</button>
        </Link>
        <br />
        <button onClick={onLogout} style={{ marginTop: "20px" }}>Logout</button>
      </>
    )}
  </div>
);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/dashboard", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:5000/logout", { withCredentials: true })
      .then(() => setUser(null));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
        <Route path="/start-takeout" element={<TakeoutInstructions />} />
      </Routes>
    </Router>
  );
};

export default App;
