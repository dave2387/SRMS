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
          <Link className="nav-link" to="/request_dash">
            <i className="bi bi-grid"></i> Dashboards
          </Link>

          <ul className="submenu">
            <li>
              <Link to="/">
                <i className="bi bi-speedometer2"></i>
                <span>Requestor Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/">
                <i className="bi bi-speedometer2"></i>
                <span>HOD Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/">
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
            <li><Link to="/request_status">Request Status</Link></li>
            <li><Link to="/service_dept">Service Departments</Link></li>
            <li><Link to="/dept_person">Department Persons</Link></li>
            <li><Link to="/service_type">Service Types</Link></li>
            <li><Link to="/req_type">Request Types</Link></li>
            <li><Link to="/ser_req_type_wp">Type-Wise Person Mapping</Link></li>
          </ul>
        </li>

        {/* Service Requests */}
        <li className="nav-item">
          <Link className="nav-link" to="/">
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
