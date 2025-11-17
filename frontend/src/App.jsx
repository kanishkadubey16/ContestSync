import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import "./App.css";
import Dashboard from "./Pages/Dashboard.jsx";
// created pages 

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/signup" style={{ marginRight: 10 }}>Signup</Link>
        <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
