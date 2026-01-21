import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import sidebarConfig from "./SidebarConfig";
import "./Sidebar.css";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // ✅ IF NOT LOGGED IN, DON'T SHOW SIDEBAR
  if (!user) return null;

  // ✅ LOGOUT HANDLER (FIXED)
  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const menuItems = sidebarConfig[user.role] || [];

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
        {menuItems.map((item, idx) => (
          <li key={idx} className="nav-item">
            {item.submenu ? (
              <>
                <span className="nav-link menu-title">
                  <i className={item.icon}></i> {item.title}
                </span>
                <ul className="submenu">
                  {item.submenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <NavLink
                        to={sub.path}
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                      >
                        <span>{sub.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink to={item.path} className="nav-link">
                <i className={item.icon}></i> {item.title}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="user-info">
          <i className="bi bi-person-circle"></i>
          <div>
            <strong>{user.email}</strong>
            <small>{user.role.toUpperCase()}</small>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
