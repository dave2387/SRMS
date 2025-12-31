import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Service_status(){
  const [statuses, setStatuses] = useState([
    {
      ServiceRequestStatusID: 1,
      ServiceRequestStatusName: "Pending",
      ServiceRequestStatusSystemName: "PENDING",
      Sequence: 1,
      Description: "Request is pending",
      UserID: 101,
      Created: "2025-12-25 10:00:00",
      Modified: "2025-12-25 10:30:00",
      ServiceRequestStatusCssClass: "badge bg-warning text-dark",
      IsOpen: true,
      IsNoFurtherActionRequired: false,
      IsAllowedForTechnician: false,
    },
    {
      ServiceRequestStatusID: 2,
      ServiceRequestStatusName: "In Progress",
      ServiceRequestStatusSystemName: "IN_PROGRESS",
      Sequence: 2,
      Description: "Request is being worked on",
      UserID: 102,
      Created: "2025-12-24 09:30:00",
      Modified: "2025-12-24 10:15:00",
      ServiceRequestStatusCssClass: "badge bg-info text-dark",
      IsOpen: true,
      IsNoFurtherActionRequired: false,
      IsAllowedForTechnician: true,
    },
    {
      ServiceRequestStatusID: 3,
      ServiceRequestStatusName: "Completed",
      ServiceRequestStatusSystemName: "COMPLETED",
      Sequence: 3,
      Description: "Work completed",
      UserID: 103,
      Created: "2025-12-23 14:00:00",
      Modified: "2025-12-23 15:00:00",
      ServiceRequestStatusCssClass: "badge bg-success text-white",
      IsOpen: false,
      IsNoFurtherActionRequired: true,
      IsAllowedForTechnician: true,
    },
  ]);

  const handleDelete = (id) => {
    setStatuses(statuses.filter(status => status.ServiceRequestStatusID !== id));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Service Request Status<br></br><h5>Define and manage service request statuses</h5></h1>
        <button className="btn btn-primary">+ Add Status</button>
      </div>

      <table className="table table-bordered table-hover table-responsive">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Status Name</th>
            <th>System Name</th>
            <th>Sequence</th>
            <th>Description</th>
            <th>User ID</th>
            <th>Created</th>
            <th>Modified</th>
            <th>CSS Class</th>
            <th>Open Status</th>
            <th>No Further Action</th>
            <th>Technician Access</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((status, index) => (
            <tr key={status.ServiceRequestStatusID}>
              <td>{index + 1}</td>
              <td><span className={status.ServiceRequestStatusCssClass}>{status.ServiceRequestStatusName}</span></td>
              <td>{status.ServiceRequestStatusSystemName}</td>
              <td>{status.Sequence}</td>
              <td>{status.Description}</td>
              <td>{status.UserID}</td>
              <td>{new Date(status.Created).toLocaleString()}</td>
              <td>{new Date(status.Modified).toLocaleString()}</td>
              <td>{status.ServiceRequestStatusCssClass}</td>
              <td>{status.IsOpen ? "Yes" : "No"}</td>
              <td>{status.IsNoFurtherActionRequired ? "Yes" : "No"}</td>
              <td>{status.IsAllowedForTechnician ? "Yes" : "No"}</td>
              <td>
                <button className="btn btn-sm btn-outline-secondary me-2 bi bi-pencil"></button>
                <button className="btn btn-sm btn-outline-danger bi bi-trash"></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Service_status;
