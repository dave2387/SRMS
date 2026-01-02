import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TechnicianDashboard.css";

const TechnicianDashboard = () => {
  return (
    <div className="tech-page">

      {/* HEADER */}
      <div className="tech-header">
        <h4>Technician Dashboard</h4>

        <div className="tech-header-right">
          <input
            className="form-control search-box"
            placeholder="Search requests..."
          />
          <div className="notify">
            <i className="bi bi-bell"></i>
            <span>3</span>
          </div>
        </div>
      </div>

      {/* TOP CARDS */}
      <div className="row g-4 mt-3">
        <div className="col-md-3">
          <div className="top-card blue">
            <div>
              <p>Assigned to Me</p>
              <h2>4</h2>
            </div>
            <div className="icon">🔧</div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="top-card orange">
            <div>
              <p>Pending Action</p>
              <h2>0</h2>
            </div>
            <div className="icon">⏰</div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="top-card purple">
            <div>
              <p>In Progress</p>
              <h2>2</h2>
            </div>
            <div className="icon">💬</div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="top-card green">
            <div>
              <p>Completed Today</p>
              <h2>2</h2>
            </div>
            <div className="icon">✔</div>
          </div>
        </div>
      </div>

      {/* MINI STATS */}
      <div className="row g-4 mt-3">
        <div className="col-md-4">
          <div className="mini-card">
            <div className="mini-icon orange">⏰</div>
            <div>
              <h5>0</h5>
              <p>Waiting to start</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mini-card">
            <div className="mini-icon blue">🔧</div>
            <div>
              <h5>2</h5>
              <p>Currently working</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mini-card">
            <div className="mini-icon green">✔</div>
            <div>
              <h5>2</h5>
              <p>Resolved today</p>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-wrapper mt-4">
        <h5>My Assigned Requests</h5>

        <table className="table">
          <thead>
            <tr>
              <th>Request #</th>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assigned</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>SR-2024-001</td>
              <td>
                Laptop not starting
                <div className="sub">Alice Cooper</div>
              </td>
              <td>Computer Issue</td>
              <td><span className="pill blue">In Progress</span></td>
              <td className="high">⚠ High</td>
              <td>1/15/2024</td>
            </tr>

            <tr>
              <td>SR-2024-003</td>
              <td>
                Install Visual Studio
                <div className="sub">Carol White</div>
              </td>
              <td>Software Installation</td>
              <td><span className="pill green">Completed</span></td>
              <td className="low">↓ Low</td>
              <td>1/14/2024</td>
            </tr>

            <tr>
              <td>SR-2024-004</td>
              <td>
                WiFi connectivity issues
                <div className="sub">David Lee</div>
              </td>
              <td>Network Issue</td>
              <td><span className="pill blue">In Progress</span></td>
              <td className="medium">— Medium</td>
              <td>1/14/2024</td>
            </tr>

            <tr>
              <td>SR-2024-008</td>
              <td>
                AC making noise
                <div className="sub">Henry Wong</div>
              </td>
              <td>AC Repair</td>
              <td><span className="pill green">Completed</span></td>
              <td className="high">⚠ High</td>
              <td>1/12/2024</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default TechnicianDashboard;