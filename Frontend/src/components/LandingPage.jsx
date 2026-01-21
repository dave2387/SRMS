import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navbar - Fixed to top */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
        <a className="navbar-brand fw-bold" href="#home">
          <span className="text-primary">SERVICE</span>HUB
        </a>
        <div className="ms-auto d-flex align-items-center">
          {/* <button className="btn btn-link text-light text-decoration-none me-3 d-none d-md-block">Documentation</button> */}
          <Link to="/Login"><button className="btn btn-primary login-btn shadow-sm">Log In</button></Link>
        </div>
      </nav>

      {/* Hero Section - Fills middle space */}
      <header className="hero-section">
        <div className="container text-center text-white">
          <h1 className="display-2 fw-bold mb-3">Service Request Management</h1>
          <p className="lead mb-4 opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            A professional, enterprise-grade portal to track, manage, and resolve 
            your team's service requests in one unified dashboard.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg px-5 py-3 fw-bold shadow">Get Started</button>
            <button className="btn btn-outline-light btn-lg px-5 py-3">View Demo</button>
          </div>
        </div>
      </header>

      {/* Features Preview - Snapped to bottom */}
      <section className="features-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Automated Routing</h3>
                <p>Instantly assign tickets to the right department based on priority.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h3>SLA Tracking</h3>
                <p>Monitor response times and ensure your team meets every deadline.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Real-time Analytics</h3>
                <p>Gain insights with custom dashboards and performance reports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;