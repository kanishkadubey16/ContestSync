import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("⏳ Creating your account...");
    try {
      const res = await API.post("/signup", { name, email, password });
      setMessage("✅ " + res.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setMessage("❌ " + (error.response?.data?.message || "Signup failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Already have an account?{" "}
        <span
          style={{ color: "#007bff", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}
