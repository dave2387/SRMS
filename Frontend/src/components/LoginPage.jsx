import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./LoginPage.css";

const roles = [
  {
    key: "admin",
    label: "Administrator",
    desc: "Full system access and configuration",
    email: "admin@gmail.com",
    password: "123456",
  },
  {
    key: "hod",
    label: "Head of Department",
    desc: "Approve requests and manage team",
    email: "hod@gmail.com",
    password: "123456",
  },
  {
    key: "technician",
    label: "Technician",
    desc: "Handle assigned service requests",
    email: "tech@gmail.com",
    password: "123456",
  },
  {
    key: "requestor",
    label: "Requestor",
    desc: "Create and track service requests",
    email: "req@gmail.com",
    password: "123456",
  },
];

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // When role changes, auto-fill email/password
  useEffect(() => {
    if (selectedRole) {
      const roleData = roles.find((r) => r.key === selectedRole);
      setEmail(roleData.email);
      setPassword(roleData.password);
    } else {
      setEmail("");
      setPassword("");
    }
  }, [selectedRole]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!selectedRole) {
      setError("Please select a role first");
      return;
    }

    const result = await login(email, password, selectedRole);

    if (result.success) {
      navigate(`/${selectedRole}/dashboard`, { replace: true });
    } else {
      setError("Invalid credentials for selected role");
    }
  };

  return (
    <div className="login-page">
      {/* LEFT PANEL */}
      <div className="login-left">
        <div className="logo">ServiceHub</div>
        <h1>Service Request Management System</h1>
        <p>
          Streamline your service workflows with intelligent request management, real-time tracking, and seamless team collaboration.
        </p>
        <div className="stats">
          <div><strong>156</strong><span>Active Requests</span></div>
          <div><strong>42</strong><span>Resolved Today</span></div>
          <div><strong>4.2h</strong><span>Avg Resolution</span></div>
          <div><strong>98%</strong><span>Satisfaction</span></div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="login-right">
        <h2>Sign in</h2>
        <p>Select your role and enter your credentials</p>

        {/* ROLE SELECTION */}
        <div className="role-grid">
          {roles.map((role) => (
            <div
              key={role.key}
              className={`role-card ${selectedRole === role.key ? "active" : ""}`}
              onClick={() => setSelectedRole(role.key)}
            >
              <div className="icon">{/* optional SVG */}</div>
              <div className="role-label">{role.label}</div>
              <div className="role-desc">{role.desc}</div>
            </div>
          ))}
        </div>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signin-btn">Sign in →</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
