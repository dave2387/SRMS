import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Request_status() {
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
  ]);

  const emptyForm = {
    ServiceRequestStatusName: "",
    ServiceRequestStatusSystemName: "",
    Sequence: "",
    Description: "",
    UserID: "",
    ServiceRequestStatusCssClass: "",
    IsOpen: false,
    IsNoFurtherActionRequired: false,
    IsAllowedForTechnician: false,
  };

  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    if (editingId) {
      setStatuses(
        statuses.map((s) =>
          s.ServiceRequestStatusID === editingId
            ? {
                ...s,
                ...formData,
                Modified: new Date().toLocaleString(),
              }
            : s
        )
      );
    } else {
      setStatuses([
        ...statuses,
        {
          ServiceRequestStatusID: Date.now(),
          ...formData,
          Created: new Date().toLocaleString(),
          Modified: new Date().toLocaleString(),
        },
      ]);
    }

    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (status) => {
    setFormData(status);
    setEditingId(status.ServiceRequestStatusID);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setStatuses(statuses.filter((s) => s.ServiceRequestStatusID !== id));
  };

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>
          Service Request Status
          <div className="text-muted fs-6">
            Define and manage service request statuses
          </div>
        </h3>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          + Add Status
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>{editingId ? "Edit Status" : "Add Status"}</h5>

            <div className="row g-3 mt-2">
              <div className="col-md-4">
                <label className="form-label">Status Name</label>
                <input
                  className="form-control"
                  name="ServiceRequestStatusName"
                  value={formData.ServiceRequestStatusName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">System Name</label>
                <input
                  className="form-control"
                  name="ServiceRequestStatusSystemName"
                  value={formData.ServiceRequestStatusSystemName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-2">
                <label className="form-label">Sequence</label>
                <input
                  type="number"
                  className="form-control"
                  name="Sequence"
                  value={formData.Sequence}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-2">
                <label className="form-label">User ID</label>
                <input
                  type="number"
                  className="form-control"
                  name="UserID"
                  value={formData.UserID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Description</label>
                <input
                  className="form-control"
                  name="Description"
                  value={formData.Description}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">CSS Class</label>
                <input
                  className="form-control"
                  name="ServiceRequestStatusCssClass"
                  value={formData.ServiceRequestStatusCssClass}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 d-flex gap-4 mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsOpen"
                    checked={formData.IsOpen}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Is Open</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsNoFurtherActionRequired"
                    checked={formData.IsNoFurtherActionRequired}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    No Further Action
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsAllowedForTechnician"
                    checked={formData.IsAllowedForTechnician}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Technician Allowed
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <button className="btn btn-success me-2" onClick={handleSubmit}>
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TABLE */}
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>System</th>
            <th>Seq</th>
            <th>Description</th>
            <th>User</th>
            <th>Created</th>
            <th>Modified</th>
            <th>Open</th>
            <th>No Action</th>
            <th>Technician</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((s, i) => (
            <tr key={s.ServiceRequestStatusID}>
              <td>{i + 1}</td>
              <td>
                <span className={s.ServiceRequestStatusCssClass}>
                  {s.ServiceRequestStatusName}
                </span>
              </td>
              <td>{s.ServiceRequestStatusSystemName}</td>
              <td>{s.Sequence}</td>
              <td>{s.Description}</td>
              <td>{s.UserID}</td>
              <td>{s.Created}</td>
              <td>{s.Modified}</td>
              <td>{s.IsOpen ? "Yes" : "No"}</td>
              <td>{s.IsNoFurtherActionRequired ? "Yes" : "No"}</td>
              <td>{s.IsAllowedForTechnician ? "Yes" : "No"}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => handleEdit(s)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(s.ServiceRequestStatusID)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Request_status;
