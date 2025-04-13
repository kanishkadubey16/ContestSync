import React from "react";
import "./UpcomingContest.css";

const UpcomingContest = () => {
  return (
    <div className="contest-page">
      <div className="contest-header">
        <p>Featured Contest</p>
      </div>

      <div className="contest-content">
        <div className="contest-info">
        <h3>LeetCode Weekly Contest </h3>
        <p>
          Join the globally renowned LeetCode weekly contest featuring algorithmic 
          challenges of varying difficulty levels. Compete with programmers worldwide!
        </p>
          <span className="status"> Registration Open</span>
          <h3>CONTEST BEGINS IN:</h3>
          <div className="countdown-timer">
            <span><strong>02</strong> Days</span>
            <span><strong>23</strong> Hours</span>
            <span><strong>58</strong> Mins</span>
            <span><strong>26</strong> Secs</span>
          </div>
          <div className="contest-buttons">
            <button className="reminder-btn">Set Reminder</button>
            <button className="join-btn">Join Contest</button>
          </div>
        </div>
        <div className="contest-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode Logo" />
        </div>
      </div>
      <div className="contest-actions">
        <button className="register-btn">Register Now</button>
        <button className="learn-btn">Learn More</button>
      </div>
    </div>
  );
};

export default UpcomingContest;