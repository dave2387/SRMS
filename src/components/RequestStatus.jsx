import React from "react";
import "./RequestStatus.css";

const RequestStatus = () => {
  const statuses = [
    { id: 1, name: "Pending", systemName: "PENDING", cssClass: "status-badge-pending", isOpen: true, allowTech: false },
    { id: 2, name: "In Progress", systemName: "IN_PROGRESS", cssClass: "status-badge-inprogress", isOpen: true, allowTech: true },
    { id: 3, name: "Completed", systemName: "COMPLETED", cssClass: "status-badge-completed", isOpen: false, allowTech: true },
    { id: 4, name: "Closed", systemName: "CLOSED", cssClass: "status-badge-closed", isOpen: false, allowTech: false },
    { id: 5, name: "Cancelled", systemName: "CANCELLED", cssClass: "status-badge-cancelled", isOpen: false, allowTech: false },
  ];

  return (
    <div className="content-area">
      <div className="header">
        <h1>Service Request Status</h1>
        {/* Checkbox hack for modal */}
        <label htmlFor="modal-toggle" className="add-status-btn">+ Add Status</label>
      </div>

      <table className="status-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Status Name</th>
            <th>System Name</th>
            <th>Open Status</th>
            <th>Technician Access</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((status) => (
            <tr key={status.id}>
              <td>{status.id}</td>
              <td><span className={`status-badge ${status.cssClass}`}>{status.name}</span></td>
              <td>{status.systemName}</td>
              <td>{status.isOpen ? "Yes" : "No"}</td>
              <td>{status.allowTech ? "Yes" : "No"}</td>
              <td>
                <button style={{ marginLeft: "8px", backgroundColor:"white" , color:"black"}} className="bi bi-pencil"></button>
                <button style={{ marginLeft: "8px", backgroundColor:"white" , color:"black"}} className="bi bi-trash"></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Hidden checkbox for modal */}
      <input type="checkbox" id="modal-toggle" style={{ display: "none" }} />

      <div className="modal-backdrop">
        <div className="modal">
          <h3>Edit / Add Status</h3>
          <label>Status Name</label>
          <input type="text" placeholder="Status Name" />

          <label>System Name</label>
          <input type="text" placeholder="System Name" />

          <label>Sequence</label>
          <input type="number" placeholder="Sequence" />

          <label>CSS Class</label>
          <input type="text" placeholder="CSS Class" />

          <label>Description</label>
          <textarea placeholder="Describe this status"></textarea>

          <div className="toggles">
            <label>
              Is Open Status
              <input type="checkbox" />
            </label>
            <label>
              Allow for Technician
              <input type="checkbox" />
            </label>
          </div>

          <div className="modal-actions">
            <label htmlFor="modal-toggle" className="btn-cancel">Cancel</label>
            <button className="btn-update">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestStatus;
