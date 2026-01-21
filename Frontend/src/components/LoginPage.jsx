import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./LoginPage.css";

const roles = [
  { key: "admin", label: "Admin", icon: "🛡️", email: "admin@gmail.com", password: "123456" },
  { key: "hod", label: "HOD", icon: "👨‍💼", email: "hod@gmail.com", password: "123456" },
  { key: "technician", label: "Technician", icon: "🔧", email: "tech@gmail.com", password: "123456" },
  { key: "requestor", label: "User", icon: "👤", email: "req@gmail.com", password: "123456" },
];

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (selectedRole) {
      const roleData = roles.find((r) => r.key === selectedRole);
      setEmail(roleData.email);
      setPassword(roleData.password);
    }
  }, [selectedRole]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password, selectedRole);
    if (result.success) navigate(`/${selectedRole}/dashboard`);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <div className="logo-circle">S</div>
          <h2>Service<span>Hub</span></h2>
          <p>Service Request Management System</p>
        </div>

        <div className="role-section">
          <p className="section-title">Select Your Role</p>
          <div className="role-grid">
            {roles.map((role) => (
              <button
                key={role.key}
                className={`role-btn ${selectedRole === role.key ? "active" : ""}`}
                onClick={() => setSelectedRole(role.key)}
              >
                <span className="role-icon">{role.icon}</span>
                <span style={{color:"black"}}>{role.label}</span>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;