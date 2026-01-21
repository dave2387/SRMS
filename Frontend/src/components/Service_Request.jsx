import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Service_request.css";

const Service_Request = () => {
  return (
    <div className="sr-page">

      {/* HEADER */}
      <div className="sr-header">
        <h4>All Service Requests</h4>

        <div className="sr-header-right">
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

      {/* PAGE TITLE */}
      <div className="page-title">
        <h3>All Service Requests</h3>
        <p>View and manage all service requests across departments</p>
      </div>

      {/* FILTERS */}
      <div className="filter-card">
        <div className="filter-title">🔽 Filters</div>

        <div className="row g-3 mt-2">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Search by request #, title, or requester..."
            />
          </div>

          <div className="col-md-3">
            <select className="form-select">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="col-md-3">
            <select className="form-select">
              <option>All Departments</option>
              <option>IT</option>
              <option>Maintenance</option>
            </select>
          </div>

          <div className="col-md-2 d-grid">
            <button className="btn btn-outline-dark">
              ⬇ Export
            </button>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="table-card mt-4">
        <h5>Results</h5>

        <table className="table">
          <thead>
            <tr>
              <th>Request #</th>
              <th>Title</th>
              <th>Requester</th>
              <th>Department</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assigned To</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>SR-2024-001</td>
              <td>
                Laptop not starting
                <div className="sub">Computer Issue</div>
              </td>
              <td>Alice Cooper</td>
              <td>IT Department</td>
              <td><span className="badge blue">In Progress</span></td>
              <td className="high">⚠ High</td>
              <td>Sarah Johnson</td>
              <td>1/15/2024</td>
            </tr>

            <tr>
              <td>SR-2024-002</td>
              <td>
                AC not cooling
                <div className="sub">AC Repair</div>
              </td>
              <td>Bob Martin</td>
              <td>Maintenance</td>
              <td><span className="badge orange">Pending</span></td>
              <td className="high">⚠ High</td>
              <td className="muted">Unassigned</td>
              <td>1/15/2024</td>
            </tr>

            <tr>
              <td>SR-2024-003</td>
              <td>
                Install Visual Studio
                <div className="sub">Software Installation</div>
              </td>
              <td>Carol White</td>
              <td>IT Department</td>
              <td><span className="badge green">Completed</span></td>
              <td className="low">↓ Low</td>
              <td>Mike Brown</td>
              <td>1/14/2024</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Service_Request;