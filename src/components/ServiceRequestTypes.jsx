import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceRequestTypes = () => {
  const [requestTypes, setRequestTypes] = useState([
    {
      ServiceRequestTypeID: 1,
      ServiceRequestTypeName: "Computer Issue",
      ServiceTypeName: "Technical",
      ServiceDeptName: "IT Department",
      DefaultPriorityLevel: "Medium",
      RequestTotal: 45,
      RequestPending: 8,
      RequestClosed: 35,
      IsVisibleResource: true,
      IsMandatoryResource: false,
      ReminderDaysAfterAssignment: 2,
      Created: "2025-12-20",
      Modified: "2025-12-21",
    },
    {
      ServiceRequestTypeID: 2,
      ServiceRequestTypeName: "Network Issue",
      ServiceTypeName: "Technical",
      ServiceDeptName: "IT Department",
      DefaultPriorityLevel: "High",
      RequestTotal: 28,
      RequestPending: 5,
      RequestClosed: 22,
      IsVisibleResource: true,
      IsMandatoryResource: true,
      ReminderDaysAfterAssignment: 1,
      Created: "2025-12-18",
      Modified: "2025-12-21",
    },
  ]);

  const emptyForm = {
    ServiceRequestTypeName: "",
    ServiceTypeName: "",
    ServiceDeptName: "",
    DefaultPriorityLevel: "Low",
    IsVisibleResource: false,
    IsMandatoryResource: false,
    ReminderDaysAfterAssignment: "",
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
      setRequestTypes(
        requestTypes.map((r) =>
          r.ServiceRequestTypeID === editingId
            ? {
                ...r,
                ...formData,
                Modified: new Date().toISOString().split("T")[0],
              }
            : r
        )
      );
    } else {
      setRequestTypes([
        ...requestTypes,
        {
          ServiceRequestTypeID: Date.now(),
          ...formData,
          RequestTotal: 0,
          RequestPending: 0,
          RequestClosed: 0,
          Created: new Date().toISOString().split("T")[0],
          Modified: new Date().toISOString().split("T")[0],
        },
      ]);
    }

    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.ServiceRequestTypeID);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setRequestTypes(requestTypes.filter((r) => r.ServiceRequestTypeID !== id));
  };

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>
          Service Request Types
          <div className="text-muted fs-6">
            Define specific request types under each service category
          </div>
        </h3>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          + Add Request Type
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>{editingId ? "Edit Request Type" : "Add Request Type"}</h5>

            <div className="row g-3 mt-2">
              <div className="col-md-6">
                <label className="form-label">Request Type Name</label>
                <input
                  className="form-control"
                  name="ServiceRequestTypeName"
                  value={formData.ServiceRequestTypeName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Service Type</label>
                <input
                  className="form-control"
                  name="ServiceTypeName"
                  value={formData.ServiceTypeName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Department</label>
                <input
                  className="form-control"
                  name="ServiceDeptName"
                  value={formData.ServiceDeptName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Default Priority</label>
                <select
                  className="form-select"
                  name="DefaultPriorityLevel"
                  value={formData.DefaultPriorityLevel}
                  onChange={handleChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">Reminder Days</label>
                <input
                  type="number"
                  className="form-control"
                  name="ReminderDaysAfterAssignment"
                  value={formData.ReminderDaysAfterAssignment}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 d-flex gap-4 align-items-center mt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsVisibleResource"
                    checked={formData.IsVisibleResource}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Visible Resource
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsMandatoryResource"
                    checked={formData.IsMandatoryResource}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Mandatory Resource
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
            <th>Request Type</th>
            <th>Service</th>
            <th>Department</th>
            <th>Priority</th>
            <th>Total</th>
            <th>Pending</th>
            <th>Closed</th>
            <th>Visible</th>
            <th>Mandatory</th>
            <th>Reminder</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requestTypes.map((r, i) => (
            <tr key={r.ServiceRequestTypeID}>
              <td>{i + 1}</td>
              <td>{r.ServiceRequestTypeName}</td>
              <td>{r.ServiceTypeName}</td>
              <td>{r.ServiceDeptName}</td>
              <td>
                <span
                  className={`badge ${
                    r.DefaultPriorityLevel === "High"
                      ? "bg-danger"
                      : r.DefaultPriorityLevel === "Medium"
                      ? "bg-warning text-dark"
                      : "bg-success"
                  }`}
                >
                  {r.DefaultPriorityLevel}
                </span>
              </td>
              <td>{r.RequestTotal}</td>
              <td>{r.RequestPending}</td>
              <td>{r.RequestClosed}</td>
              <td>{r.IsVisibleResource ? "Yes" : "No"}</td>
              <td>{r.IsMandatoryResource ? "Yes" : "No"}</td>
              <td>{r.ReminderDaysAfterAssignment}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => handleEdit(r)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(r.ServiceRequestTypeID)}
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
};

export default ServiceRequestTypes;
