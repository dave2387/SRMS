import React from "react";
import "./ServiceDepartments.css";

const ServiceDepartments = () => {
  const departments = [
    {
      id: 1,
      name: "IT Department",
      campusId: 101,
      description: "Information Technology support",
      userId: 1,
      created: "2025-12-20 10:30",
      modified: "2025-12-21 09:15",
      ccEmail: "it-support@company.com",
      isRequestTitleDisable: false,
    },
    {
      id: 2,
      name: "Maintenance",
      campusId: 102,
      description: "Building and facilities maintenance",
      userId: 2,
      created: "2025-12-20 10:35",
      modified: "2025-12-21 09:20",
      ccEmail: "maintenance@company.com",
      isRequestTitleDisable: true,
    },
    {
      id: 3,
      name: "Housekeeping",
      campusId: 103,
      description: "Cleaning and housekeeping services",
      userId: 3,
      created: "2025-12-20 10:40",
      modified: "2025-12-21 09:25",
      ccEmail: "-",
      isRequestTitleDisable: false,
    },
    {
      id: 4,
      name: "HR Services",
      campusId: 104,
      description: "Human resources support",
      userId: 4,
      created: "2025-12-20 10:45",
      modified: "2025-12-21 09:30",
      ccEmail: "-",
      isRequestTitleDisable: true,
    },
  ];

  return (
    <div className="service-departments-page">
      <div className="header">
        <h1>Service Departments<br></br>
        <h5>Manage departments responsible for handling service requests</h5></h1>
        
        <button className="add-department-btn">+ Add Department</button>
      </div>

      {/* Scrollable table container */}
      <div className="table-container">
        <table className="departments-table">
          <thead>
            <tr>
              <th>ServiceDeptID</th>
              <th>Department Name</th>
              <th>CampusID</th>
              <th>Description</th>
              <th>UserID</th>
              <th>Created</th>
              <th>Modified</th>
              <th>CC Email</th>
              <th>IsRequestTitleDisable</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept,index) => (
              <tr key={dept.id} 
              className={index % 2 === 0 ? "row-blue" : "row-green"}>
                <td>{dept.id}</td>
                <td>{dept.name}</td>
                <td>{dept.campusId}</td>
                <td>{dept.description}</td>
                <td>{dept.userId}</td>
                <td>{dept.created}</td>
                <td>{dept.modified}</td>
                <td>{dept.ccEmail}</td>
                <td>{dept.isRequestTitleDisable ? "Yes" : "No"}</td>
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

export default ServiceDepartments;
