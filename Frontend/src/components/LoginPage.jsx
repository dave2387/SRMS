import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    alert("Login Successful!");
    // TODO: call backend login API
  };

  return (
    <div className="login-page">
      {/* Left side */}
      <div className="login-left">
        <h1>Welcome Back!</h1>
        <p>Login to continue to your dashboard.</p>
      </div>

      {/* Right side - form */}
      <div className="login-right">
        <div className="login-card">
          {/* Back arrow */}
          <div className="back-arrow" onClick={() => navigate(-1)}>
            &#8592;
          </div>

          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p className="signup-text">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
