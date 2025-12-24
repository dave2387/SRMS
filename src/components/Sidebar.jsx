import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar" style={{marginLeft:"-127px"}}> 
      <div className="logo">
        <i className="bi bi-gear-fill"></i>
        <span>SRMS</span>
      </div>

      <div className="menu mt-3"zz>
        <Link to="/"><i className="bi bi-speedometer2"></i><span>Dashboard</span></Link>
        <Link to="/list"><i className="bi bi-list-task"></i><span>List</span></Link>
        <Link to="/add"><i className="bi bi-plus-circle"></i><span>Add File</span></Link>
        <Link to="/edit"><i className="bi bi-pencil-square"></i><span>Edit</span></Link>
        {/* <Link to="/srs"><i className="bi bi-pencil-square"  ></i><span>SRS</span></Link> */}
      </div>

      <div className="auth">
        <Link to="#"><i className="bi bi-box-arrow-right"></i><span>Logout</span></Link>
      </div>
    </div>
  );
};

export default Sidebar;
