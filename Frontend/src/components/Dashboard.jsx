import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">

      {/* PAGE HEADER */}
      <div className="dashboard-header">
        <h4>Dashboard</h4>

        <div className="header-actions">
          <input
            type="text"
            className="form-control"
            placeholder="Search requests..."
          />
          <div className="notify">
            🔔 <span>3</span>
          </div>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="dashboard-content">

        {/* WELCOME BANNER */}
        <div className="welcome-banner">
          <div>
            <h3>Welcome to Service Request Management</h3>
            <p>
              Track, manage, and resolve service requests efficiently across all departments.
            </p>

            <div className="banner-actions">
              <button className="btn btn-light">Raise Request</button>
              <button className="btn btn-outline-light">
                View All Requests →
              </button>
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="row g-4 mt-4">
          <div className="col-xl-3 col-md-6">
            <div className="stat-box blue">
              <p>Total Requests</p>
              <h2>8</h2>
              <small>+12% from last month</small>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="stat-box orange">
              <p>Pending</p>
              <h2>3</h2>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="stat-box purple">
              <p>In Progress</p>
              <h2>2</h2>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="stat-box green">
              <p>Completed</p>
              <h2>3</h2>
            </div>
          </div>
        </div>

        {/* ROLE DASHBOARDS */}
        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="role-box">
              <h6>Requester Dashboard</h6>
              <p>Raise and track requests</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="role-box">
              <h6>HOD Dashboard</h6>
              <p>Approve and monitor</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="role-box">
              <h6>Technician Dashboard</h6>
              <p>Manage assignments</p>
            </div>
          </div>
        </div>

        {/* RECENT REQUESTS */}
        <div className="recent-section mt-4">
          <div className="section-header">
            <h6>Recent Service Requests</h6>
            <a href="#">View all →</a>
          </div>

          <div className="request-row">
            <span>SR-2024-001</span>
            <span className="status in-progress">In Progress</span>
            <span className="priority high">High</span>
            <span>15/01/2024</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;