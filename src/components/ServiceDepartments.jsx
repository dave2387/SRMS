import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ServiceDepartments() {
  const [departments, setDepartments] = useState([
    {
      ServiceDeptID: 1,
      DepartmentName: "IT Department",
      CampusID: 101,
      Description: "Information Technology support",
      UserID: 1,
      Created: "2025-12-20 10:30",
      Modified: "2025-12-21 09:15",
      CCEmail: "it-support@company.com",
      IsRequestTitleDisable: false,
    },
    {
      ServiceDeptID: 2,
      DepartmentName: "Maintenance",
      CampusID: 102,
      Description: "Building and facilities maintenance",
      UserID: 2,
      Created: "2025-12-20 10:35",
      Modified: "2025-12-21 09:20",
      CCEmail: "maintenance@company.com",
      IsRequestTitleDisable: true,
    },
  ]);

  const emptyForm = {
    DepartmentName: "",
    CampusID: "",
    Description: "",
    UserID: "",
    CCEmail: "",
    IsRequestTitleDisable: false,
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
      setDepartments(
        departments.map((d) =>
          d.ServiceDeptID === editingId
            ? {
                ...d,
                ...formData,
                Modified: new Date().toLocaleString(),
              }
            : d
        )
      );
    } else {
      setDepartments([
        ...departments,
        {
          ServiceDeptID: Date.now(),
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

  const handleEdit = (dept) => {
    setFormData(dept);
    setEditingId(dept.ServiceDeptID);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setDepartments(departments.filter((d) => d.ServiceDeptID !== id));
  };

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>
          Service Departments
          <div className="text-muted fs-6">
            Manage departments responsible for handling service requests
          </div>
        </h3>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          + Add Department
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>{editingId ? "Edit Department" : "Add Department"}</h5>

            <div className="row g-3 mt-2">
              <div className="col-md-4">
                <label className="form-label">Department Name</label>
                <input
                  className="form-control"
                  name="DepartmentName"
                  value={formData.DepartmentName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Campus ID</label>
                <input
                  type="number"
                  className="form-control"
                  name="CampusID"
                  value={formData.CampusID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
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
                <label className="form-label">CC Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="CCEmail"
                  value={formData.CCEmail}
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

              <div className="col-md-12">
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsRequestTitleDisable"
                    checked={formData.IsRequestTitleDisable}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Disable Request Title
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
            <th>Department</th>
            <th>Campus</th>
            <th>Description</th>
            <th>User</th>
            <th>Created</th>
            <th>Modified</th>
            <th>CC Email</th>
            <th>Disable Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((d, i) => (
            <tr key={d.ServiceDeptID}>
              <td>{i + 1}</td>
              <td>{d.DepartmentName}</td>
              <td>{d.CampusID}</td>
              <td>{d.Description}</td>
              <td>{d.UserID}</td>
              <td>{d.Created}</td>
              <td>{d.Modified}</td>
              <td>{d.CCEmail}</td>
              <td>{d.IsRequestTitleDisable ? "Yes" : "No"}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => handleEdit(d)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(d.ServiceDeptID)}
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

export default ServiceDepartments;
