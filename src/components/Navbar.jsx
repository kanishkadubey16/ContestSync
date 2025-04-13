import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <span className="logo">ContestSync</span>
      </div>

      <div className="center">
        <ul className="nav-links">
          <li>Home</li>
          <li>Contests</li>
          <li>Leaderboard</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="right">
        <button className="sign-in">Sign In</button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default Navbar;



