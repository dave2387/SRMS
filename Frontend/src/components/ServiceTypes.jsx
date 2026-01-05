import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceTypes = () => {
  const [serviceTypes, setServiceTypes] = useState([
    {
      ServiceTypeID: 101,
      ServiceTypeName: "IT Support",
      Description: "Technical assistance",
      Sequence: 1,
      UserID: 1,
      Created: "2025-01-01 10:00",
      Modified: "2025-12-20 09:00",
      IsForStaff: true,
      IsForStudent: false,
    },
    {
      ServiceTypeID: 102,
      ServiceTypeName: "Maintenance",
      Description: "Building and facility maintenance",
      Sequence: 2,
      UserID: 2,
      Created: "2025-01-02 11:00",
      Modified: "2025-12-21 09:15",
      IsForStaff: true,
      IsForStudent: true,
    },
  ]);

  const emptyForm = {
    ServiceTypeName: "",
    Description: "",
    Sequence: "",
    UserID: "",
    IsForStaff: false,
    IsForStudent: false,
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
      setServiceTypes(
        serviceTypes.map((t) =>
          t.ServiceTypeID === editingId
            ? {
                ...t,
                ...formData,
                Modified: new Date().toLocaleString(),
              }
            : t
        )
      );
    } else {
      setServiceTypes([
        ...serviceTypes,
        {
          ServiceTypeID: Date.now(),
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

  const handleEdit = (type) => {
    setFormData(type);
    setEditingId(type.ServiceTypeID);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setServiceTypes(serviceTypes.filter((t) => t.ServiceTypeID !== id));
  };

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>
          Service Types
          <div className="text-muted fs-6">
            Manage all service types
          </div>
        </h3>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          + Add Service Type
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>{editingId ? "Edit Service Type" : "Add Service Type"}</h5>

            <div className="row g-3 mt-2">
              <div className="col-md-6">
                <label className="form-label">Service Type Name</label>
                <input
                  className="form-control"
                  name="ServiceTypeName"
                  value={formData.ServiceTypeName}
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

              <div className="col-md-4">
                <label className="form-label">User ID</label>
                <input
                  className="form-control"
                  name="UserID"
                  value={formData.UserID}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">Description</label>
                <input
                  className="form-control"
                  name="Description"
                  value={formData.Description}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 d-flex gap-4 mt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsForStaff"
                    checked={formData.IsForStaff}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    For Staff
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="IsForStudent"
                    checked={formData.IsForStudent}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    For Student
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
            <th>Service Type</th>
            <th>Description</th>
            <th>Seq</th>
            <th>User</th>
            <th>Created</th>
            <th>Modified</th>
            <th>Staff</th>
            <th>Student</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {serviceTypes.map((t, i) => (
            <tr key={t.ServiceTypeID}>
              <td>{i + 1}</td>
              <td>{t.ServiceTypeName}</td>
              <td>{t.Description}</td>
              <td>{t.Sequence}</td>
              <td>{t.UserID}</td>
              <td>{t.Created}</td>
              <td>{t.Modified}</td>
              <td>{t.IsForStaff ? "Yes" : "No"}</td>
              <td>{t.IsForStudent ? "Yes" : "No"}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => handleEdit(t)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(t.ServiceTypeID)}
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

export default ServiceTypes;
