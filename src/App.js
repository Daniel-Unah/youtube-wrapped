import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/dashboard", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:3000/logout", { withCredentials: true })
      .then(() => setUser(null));
  };

  return (
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
          <button onClick={handleLogout} style={{ marginTop: "20px" }}>Logout</button>
        </>
      )}
    </div>
  );
};

export default App;
