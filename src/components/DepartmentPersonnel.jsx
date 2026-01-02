import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DepartmentPersonnel = () => {
  const [personnel, setPersonnel] = useState([
    {
      ServiceDeptPersonID: 1,
      ServiceDeptID: 101,
      StaffID: 1001,
      StaffName: "John Smith",
      FromDate: "2023-01-01",
      ToDate: "2025-12-31",
      Description: "IT HOD",
      UserID: 1,
      Created: "2023-01-01 10:00",
      Modified: "2025-12-20 09:00",
      IsHODStaff: true,
    },
    {
      ServiceDeptPersonID: 2,
      ServiceDeptID: 101,
      StaffID: 1002,
      StaffName: "Sarah Johnson",
      FromDate: "2023-01-01",
      ToDate: "2025-12-31",
      Description: "",
      UserID: 2,
      Created: "2023-01-01 11:00",
      Modified: "2025-12-20 09:15",
      IsHODStaff: false,
    },
  ]);

  const emptyForm = {
    ServiceDeptID: "",
    StaffID: "",
    StaffName: "",
    FromDate: "",
    ToDate: "",
    Description: "",
    UserID: "",
    IsHODStaff: false,
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
      setPersonnel(
        personnel.map((p) =>
          p.ServiceDeptPersonID === editingId
            ? {
                ...p,
                ...formData,
                Modified: new Date().toLocaleString(),
              }
            : p
        )
      );
    } else {
      setPersonnel([
        ...personnel,
        {
          ServiceDeptPersonID: Date.now(),
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

  const handleEdit = (person) => {
    setFormData(person);
    setEditingId(person.ServiceDeptPersonID);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setPersonnel(personnel.filter((p) => p.ServiceDeptPersonID !== id));
  };

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>
          Department Personnel
          <div className="text-muted fs-6">
            Manage staff mapped to service departments
          </div>
        </h3>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          + Add Person
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>{editingId ? "Edit Personnel" : "Add Personnel"}</h5>

            <div className="row g-3 mt-2">
              <div className="col-md-3">
                <label className="form-label">Service Dept ID</label>
                <input
                  className="form-control"
                  name="ServiceDeptID"
                  value={formData.ServiceDeptID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">Staff ID</label>
                <input
                  className="form-control"
                  name="StaffID"
                  value={formData.StaffID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Staff Name</label>
                <input
                  className="form-control"
                  name="StaffName"
                  value={formData.StaffName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">From Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="FromDate"
                  value={formData.FromDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">To Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="ToDate"
                  value={formData.ToDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">User ID</label>
                <input
                  className="form-control"
                  name="UserID"
                  value={formData.UserID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-8">
                <label className="form-label">Description</label>
                <input
                  className="form-control"
                  name="Description"
                  value={formData.Description}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsHODStaff"
                    checked={formData.IsHODStaff}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Is HOD Staff
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
            <th>ServiceDept</th>
            <th>Staff</th>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Description</th>
            <th>User</th>
            <th>Created</th>
            <th>Modified</th>
            <th>HOD</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {personnel.map((p, i) => (
            <tr key={p.ServiceDeptPersonID}>
              <td>{i + 1}</td>
              <td>{p.ServiceDeptID}</td>
              <td>{p.StaffID}</td>
              <td>
                {p.StaffName}{" "}
                {p.IsHODStaff && (
                  <span className="badge bg-success ms-2">HOD</span>
                )}
              </td>
              <td>{p.FromDate}</td>
              <td>{p.ToDate}</td>
              <td>{p.Description}</td>
              <td>{p.UserID}</td>
              <td>{p.Created}</td>
              <td>{p.Modified}</td>
              <td>{p.IsHODStaff ? "Yes" : "No"}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => handleEdit(p)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(p.ServiceDeptPersonID)}
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

export default DepartmentPersonnel;