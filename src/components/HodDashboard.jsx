import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HodDashboard.css";

const HodDashboard = () => {
  return (
    <div className="hod-page">

      {/* HEADER */}
      <div className="hod-header">
        <h4>HOD Dashboard</h4>

        <div className="hod-header-right">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search requests..."
          />
          <div className="notification">
            <i className="bi bi-bell"></i>
            <span className="badge">3</span>
          </div>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="row g-4 mt-3">
        <div className="col-md-3">
          <div className="stat-card pending">
            <div>
              <p>Pending Approval</p>
              <h2>3</h2>
            </div>
            <div className="icon">⏰</div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card unassigned">
            <div>
              <p>Unassigned</p>
              <h2>1</h2>
            </div>
            <div className="icon">👤+</div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card progress">
            <div>
              <p>In Progress</p>
              <h2>2</h2>
            </div>
            <div className="icon">👥</div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card completed">
            <div>
              <p>Completed Today</p>
              <h2>3</h2>
            </div>
            <div className="icon">✔</div>
          </div>
        </div>
      </div>

      {/* ALERT */}
      <div className="approval-alert mt-4">
        ⚠️ <b>3 request(s) awaiting your approval</b>
        <p>Please review and approve or reject pending requests.</p>
      </div>

      {/* TABLE */}
      <div className="table-card mt-4">
        <h5>Department Requests</h5>

        <table className="table">
          <thead>
            <tr>
              <th>Request #</th>
              <th>Title</th>
              <th>Type</th>
              <th>Approval</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>SR-2024-001</td>
              <td>
                Laptop not starting
                <div className="sub-text">Alice Cooper</div>
              </td>
              <td>Computer Issue</td>
              <td><span className="badge green">Approved</span></td>
              <td><span className="badge blue">In Progress</span></td>
              <td>Sarah Johnson</td>
              <td className="high">⚠ High</td>
            </tr>

            <tr>
              <td>SR-2024-002</td>
              <td>
                AC not cooling
                <div className="sub-text">Bob Martin</div>
              </td>
              <td>AC Repair</td>
              <td><span className="badge orange">Pending</span></td>
              <td><span className="badge orange">Pending</span></td>
              <td className="muted">Unassigned</td>
              <td className="high">⚠ High</td>
            </tr>

            <tr>
              <td>SR-2024-003</td>
              <td>
                Install Visual Studio
                <div className="sub-text">Carol White</div>
              </td>
              <td>Software Installation</td>
              <td><span className="badge green">Approved</span></td>
              <td><span className="badge green">Completed</span></td>
              <td>Mike Brown</td>
              <td className="low">↓ Low</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default HodDashboard;