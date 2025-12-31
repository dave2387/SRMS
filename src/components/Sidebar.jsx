import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <i className="bi bi-wrench-adjustable-circle sidebar-logo"></i>
        <div>
          <h5>Service Request</h5>
          Management System
        </div>
      </div>

      {/* Menu */}
      <ul className="nav flex-column">

        {/* Dashboards */}
        <li className="nav-item">
          <span className="nav-link">
            <i className="bi bi-grid"></i> Dashboards
          </span>

          <ul className="submenu">
            <li>
              <Link to="/request_dash">
                <i className="bi bi-speedometer2"></i>
                <span>Requestor Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/hod-dashboard">
                <i className="bi bi-speedometer2"></i>
                <span>HOD Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/technician-dashboard">
                <i className="bi bi-speedometer2"></i>
                <span>Technician Dashboard</span>
              </Link>
            </li>
          </ul>
        </li>

        {/* Master Setup */}
        <li className="nav-item">
          <span className="nav-link">
            <i className="bi bi-gear"></i> Master Setup
          </span>

          <ul className="submenu">
            <li><Link to="/request-status">Request Status</Link></li>
            <li><Link to="/service-departments">Service Departments</Link></li>
            <li><Link to="/department-persons">Department Persons</Link></li>
            <li><Link to="/service-types">Service Types</Link></li>
            <li><Link to="/request-types">Request Types</Link></li>
            <li><Link to="/type-person-mapping">Type-Wise Person Mapping</Link></li>
          </ul>
        </li>

        {/* Service Requests */}
        <li className="nav-item">
          <Link className="nav-link" to="/service-requests">
            <i className="bi bi-ticket-detailed"></i> Service Requests
          </Link>
        </li>

      </ul>

      {/* Footer */}
      <div className="sidebar-footer">
        <i className="bi bi-person-circle"></i>
        <div>
          <strong>Admin User</strong>
          <small>Administrator</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
