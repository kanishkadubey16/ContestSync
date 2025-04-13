import React, { useState, useEffect } from "react";
import "./AllContest.css";

const contests = [
  {
    platform: "Codeforces",
    name: "Codeforces Round #915",
    details: "Participate in the Codeforces round featuring algorithmic challenges.",
    image: "/images/codefirces2.png",
    startTime: "2025-04-20T10:00:00Z",
  },
  {
    platform: "CodeChef",
    name: "CodeChef May Long Challenge",
    details: "Multi-day coding competition with complex algorithmic problems.",
    image: "/images/codechef.png",
    startTime: "2025-04-22T08:30:00Z",
  },
  {
    platform: "LeetCode",
    name: "LeetCode Weekly Contest 102",
    details: "Test your DSA skills with the latest LeetCode contest.",
    image: "/images/leetcode.png",
    startTime: "2025-04-21T14:00:00Z",
  },
  {
    platform: "GeeksforGeeks",
    name: "GFG Coding Challenge",
    details: "Solve competitive programming questions on GeeksforGeeks.",
    image: "/images/gfg.png",
    startTime: "2025-04-19T17:00:00Z",
  },
  {
    platform: "HackerRank",
    name: "HackerRank Monthly Contest",
    details: "Challenge yourself with problems across multiple domains.",
    image: "/images/hackerrank .png",
    startTime: "2025-04-23T12:00:00Z",
  },
  {
    platform: "AtCoder",
    name: "AtCoder Beginner Contest 291",
    details: "Japanese-based competitive programming contest for all levels.",
    image: "/images/atcoder.png",
    startTime: "2025-04-25T09:00:00Z",
  },
];

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
};

const AllContest = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [timers, setTimers] = useState([]);

  const platforms = ["All", ...new Set(contests.map((c) => c.platform))];

  const filteredContests =
    activeFilter === "All"
      ? contests
      : contests.filter((c) => c.platform === activeFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const newTimers = contests.map((contest) => {
        const start = new Date(contest.startTime).getTime();
        const diff = Math.max(0, Math.floor((start - now) / 1000));
        return diff;
      });
      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="all-contests-container">
      <h2>All Contests</h2>
      <p>
        Browse through our carefully curated contests designed for professionals
        at all levels. Register early to secure your spot.
      </p>

      <div className="filter-container">
        {platforms.map((platform) => (
          <button
            key={platform}
            className={activeFilter === platform ? "active" : ""}
            onClick={() => setActiveFilter(platform)}
          >
            {platform}
          </button>
        ))}
      </div>

      <div className="contest-grid">
        {filteredContests.map((contest, index) => (
          <div key={index} className="contest-card">
            <img
              src={contest.image}
              alt={`${contest.platform} contest`}
              className="contest-image"
            />
            <h3>{contest.name}</h3>
            <p>{contest.details}</p>
            <p className="timer">
              Starts in:{" "}
              {timers.length ? formatTime(timers[contests.indexOf(contest)]) : "Loading..."}
            </p>
            <div className="card-buttons">
              <button className="details-btn">Details</button>
              <button className="enter-btn">Enter</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContest;
