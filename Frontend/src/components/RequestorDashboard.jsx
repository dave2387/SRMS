import React from "react";
import "./RequestorDashboard.css";

const RequestorDashboard = () => {
  return (
    <div className="requestor-wrapper">

      {/* HEADER */}
      <div className="dashboard-top">
        <h4>Requestor Dashboard</h4>

        <div className="top-actions">
          <div className="search-box">
            <i className="bi bi-search" aria-label="Search Icon"></i>
            <input type="text" placeholder="Search requests..." />
          </div>

          <div className="notification">
            <i className="bi bi-bell" aria-label="Notifications"></i>
            <span className="badge">3</span>
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="stats-row">
        <div className="stat-card blue">
          <div>
            <p>My Requests</p>
            <h3>8</h3>
          </div>
          <i className="bi bi-send"></i>
        </div>

        <div className="stat-card orange">
          <div>
            <p>Pending</p>
            <h3>3</h3>
          </div>
          <i className="bi bi-clock"></i>
        </div>

        <div className="stat-card purple">
          <div>
            <p>In Progress</p>
            <h3>2</h3>
          </div>
          <i className="bi bi-chat-dots"></i>
        </div>

        <div className="stat-card green">
          <div>
            <p>Completed</p>
            <h3>3</h3>
          </div>
          <i className="bi bi-check-circle"></i>
        </div>
      </div>

      {/* RAISE BUTTON */}
      <button type="button" className="raise-btn">
        <i className="bi bi-plus-lg"></i>
        Raise New Request
      </button>

      {/* TABLE */}
      <div className="table-card">
        <h3>My Service Requests</h3>

        <table>
          <thead>
            <tr>
              <th>Request #</th>
              <th>Title</th>
              <th>Department</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>SR-2024-001</td>
              <td>
                Laptop not starting
                <span>Computer Issue</span>
              </td>
              <td>IT Department</td>
              <td><span className="status progress">In Progress</span></td>
              <td className="high">High</td>
              <td>1/15/2024</td>
            </tr>

            <tr>
              <td>SR-2024-002</td>
              <td>
                AC not cooling
                <span>AC Repair</span>
              </td>
              <td>Maintenance</td>
              <td><span className="status pending">Pending</span></td>
              <td className="high">High</td>
              <td>1/15/2024</td>
            </tr>

            <tr>
              <td>SR-2024-003</td>
              <td>
                Install Visual Studio
                <span>Software Installation</span>
              </td>
              <td>IT Department</td>
              <td><span className="status completed">Completed</span></td>
              <td className="low">Low</td>
              <td>1/14/2024</td>
            </tr>

            <tr>
              <td>SR-2024-004</td>
              <td>
                WiFi connectivity issues
                <span>Network Issue</span>
              </td>
              <td>IT Department</td>
              <td><span className="status progress">In Progress</span></td>
              <td className="medium">Medium</td>
              <td>1/14/2024</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default RequestorDashboard;
