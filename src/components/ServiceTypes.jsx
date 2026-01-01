import React from "react";
import "./ServiceTypes.css";

const ServiceTypes = () => {
  const serviceTypes = [
    {
      id: 1,
      serviceTypeID: 101,
      serviceTypeName: "IT Support",
      description: "Technical assistance",
      sequence: 1,
      userID: 1,
      created: "2025-01-01 10:00",
      modified: "2025-12-20 09:00",
      isForStaff: true,
      isForStudent: false
    },
    {
      id: 2,
      serviceTypeID: 102,
      serviceTypeName: "Maintenance",
      description: "Building and facility maintenance",
      sequence: 2,
      userID: 2,
      created: "2025-01-02 11:00",
      modified: "2025-12-21 09:15",
      isForStaff: true,
      isForStudent: true
    },
    {
      id: 3,
      serviceTypeID: 103,
      serviceTypeName: "Housekeeping",
      description: "Cleaning services",
      sequence: 3,
      userID: 3,
      created: "2025-02-01 09:30",
      modified: "2025-12-22 09:30",
      isForStaff: false,
      isForStudent: true
    },
  ];

  return (
    <div className="page-container">
      <div className="header">
        <h1>Service Types<br></br>
        <h5>Manage all service types</h5></h1>
        <button className="add-btn">+ Add Service Type</button>
      </div>

      {/* Scrollable table container */}
      <div className="table-container">
        <table className="service-types-table">
          <thead>
            <tr>
              <th>ServiceTypeID</th>
              <th>ServiceTypeName</th>
              <th>Description</th>
              <th>Sequence</th>
              <th>UserID</th>
              <th>Created</th>
              <th>Modified</th>
              <th>IsForStaff</th>
              <th>IsForStudent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {serviceTypes.map((type) => (
              <tr key={type.id}>
                <td>{type.serviceTypeID}</td>
                <td>{type.serviceTypeName}</td>
                <td>{type.description}</td>
                <td>{type.sequence}</td>
                <td>{type.userID}</td>
                <td>{type.created}</td>
                <td>{type.modified}</td>
                <td>{type.isForStaff ? "Yes" : "No"}</td>
                <td>{type.isForStudent ? "Yes" : "No"}</td>
                <td>
                  <button
                    style={{ marginLeft: "8px", backgroundColor: "white", color: "black" }}
                    className="bi bi-pencil"
                  ></button>
                  <button
                    style={{ marginLeft: "8px", backgroundColor: "white", color: "black" }}
                    className="bi bi-trash"
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTypes;