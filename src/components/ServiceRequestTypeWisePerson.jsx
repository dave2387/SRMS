import React from "react";
import "./ServiceRequestTypeWisePerson.css";

const ServiceRequestTypeWisePerson = () => {
  const data = [
    {
      id: 1,
      serviceRequestTypeID: 101,
      staffID: 12,
      fromDate: "2025-01-01",
      toDate: "2025-06-30",
      description: "Primary responsible staff",
      userID: 1,
      created: "2025-01-01 10:00",
      modified: "2025-02-01 12:30",
    },
    {
      id: 2,
      serviceRequestTypeID: 102,
      staffID: 15,
      fromDate: "2025-03-01",
      toDate: "",
      description: "Backup staff",
      userID: 1,
      created: "2025-03-01 09:15",
      modified: "2025-03-05 14:20",
    },
  ];

  return (
    <div className="srwp-page">
      {/* PAGE HEADER */}
      <div className="srwp-header">
        <h1>Service Request Type Wise Person<br/><h5>Manage type wise person mapping</h5></h1>
        <button className="btn-add">+ Add</button>
      </div>

      {/* TABLE */}
      <div className="srwp-table-wrapper">
        <table className="srwp-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Service Request Type ID</th>
              <th>Staff ID</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Description</th>
              <th>User ID</th>
              <th>Created</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.serviceRequestTypeID}</td>
                <td>{row.staffID}</td>
                <td>{row.fromDate}</td>
                <td>{row.toDate || "-"}</td>
                <td>{row.description}</td>
                <td>{row.userID}</td>
                <td>{row.created}</td>
                <td>{row.modified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceRequestTypeWisePerson;
