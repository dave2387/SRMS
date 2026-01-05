import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceRequestTypeWisePerson = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      serviceRequestTypeID: 101,
      staffID: 12,
      fromDate: "2025-01-01",
      toDate: "2025-06-30",
      description: "Primary responsible staff",
      userID: 1,
      created: "2025-01-01",
      modified: "2025-02-01",
    },
    {
      id: 2,
      serviceRequestTypeID: 102,
      staffID: 15,
      fromDate: "2025-03-01",
      toDate: "",
      description: "Backup staff",
      userID: 1,
      created: "2025-03-01",
      modified: "2025-03-05",
    },
  ]);

  const emptyForm = {
    serviceRequestTypeID: "",
    staffID: "",
    fromDate: "",
    toDate: "",
    description: "",
    userID: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (editingId) {
      setRecords(
        records.map((r) =>
          r.id === editingId
            ? {
                ...r,
                ...formData,
                modified: new Date().toISOString().split("T")[0],
              }
            : r
        )
      );
    } else {
      setRecords([
        ...records,
        {
          id: Date.now(),
          ...formData,
          created: new Date().toISOString().split("T")[0],
          modified: new Date().toISOString().split("T")[0],
        },
      ]);
    }

    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (row) => {
    setFormData(row);
    setEditingId(row.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>
          Service Request Type Wise Person
          <div className="text-muted fs-6">
            Manage type wise person mapping
          </div>
        </h3>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          + Add Mapping
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>{editingId ? "Edit Mapping" : "Add Mapping"}</h5>

            <div className="row g-3 mt-2">
              <div className="col-md-4">
                <label className="form-label">Service Request Type ID</label>
                <input
                  type="number"
                  className="form-control"
                  name="serviceRequestTypeID"
                  value={formData.serviceRequestTypeID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Staff ID</label>
                <input
                  type="number"
                  className="form-control"
                  name="staffID"
                  value={formData.staffID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">User ID</label>
                <input
                  type="number"
                  className="form-control"
                  name="userID"
                  value={formData.userID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">From Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="fromDate"
                  value={formData.fromDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">To Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="toDate"
                  value={formData.toDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="2"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
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
            <th>Service Request Type</th>
            <th>Staff</th>
            <th>From</th>
            <th>To</th>
            <th>Description</th>
            <th>User</th>
            <th>Created</th>
            <th>Modified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((row, i) => (
            <tr key={row.id}>
              <td>{i + 1}</td>
              <td>{row.serviceRequestTypeID}</td>
              <td>{row.staffID}</td>
              <td>{row.fromDate}</td>
              <td>{row.toDate || "-"}</td>
              <td>{row.description}</td>
              <td>{row.userID}</td>
              <td>{row.created}</td>
              <td>{row.modified}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => handleEdit(row)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(row.id)}
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

export default ServiceRequestTypeWisePerson;
