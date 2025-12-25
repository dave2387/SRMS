import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="bi bi-gear-fill"></i>
        <span>SRMS</span>
      </div>

      <div className="menu">
        <Link to="/"><i className="bi bi-speedometer2"></i><span>Dashboard</span></Link>
        <Link to="/list"><i className="bi bi-list-task"></i><span>List</span></Link>
        <Link to="/add"><i className="bi bi-plus-circle"></i><span>Add File</span></Link>
        <Link to="/edit"><i className="bi bi-pencil-square"></i><span>Edit</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
        <Link to="/srs"><i className="bi bi-info-circle"></i><span>Status</span></Link>
      </div>

      <div className="auth">
        <Link to="#"><i className="bi bi-box-arrow-right"></i><span>Logout</span></Link>
      </div>
    </div>
  );
};

export default Sidebar;
