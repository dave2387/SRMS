import React from "react";
import "./DepartmentPersonnel.css";

const DepartmentPersonnel = () => {
    const personnel = [
        {
            id: 1,
            serviceDeptPersonID: 1,
            serviceDeptID: 101,
            staffID: 1001,
            name: "John Smith",
            fromDate: "2023-01-01",
            toDate: "2025-12-31",
            description: "IT HOD",
            userID: 1,
            created: "2023-01-01 10:00",
            modified: "2025-12-20 09:00",
            isHODStaff: true
        },
        {
            id: 2,
            serviceDeptPersonID: 2,
            serviceDeptID: 101,
            staffID: 1002,
            name: "Sarah Johnson",
            fromDate: "2023-01-01",
            toDate: "2025-12-31",
            description: "",
            userID: 2,
            created: "2023-01-01 11:00",
            modified: "2025-12-20 09:15",
            isHODStaff: false
        },
        {
            id: 3,
            serviceDeptPersonID: 3,
            serviceDeptID: 102,
            staffID: 1003,
            name: "Mike Brown",
            fromDate: "2023-02-15",
            toDate: "2025-12-31",
            description: "Maintenance Staff",
            userID: 3,
            created: "2023-02-15 09:30",
            modified: "2025-12-20 09:30",
            isHODStaff: false
        },
    ];

    return (
        <div className="page-container">
            <div className="header">
                <h1>Department Personnel<br></br><h5>Manage staff mapped to each service department</h5></h1>
                <button className="add-btn">+ Add Person</button>
            </div>

            {/* Scrollable table container */}
            <div className="table-container">
                <table className="personnel-table">
                    <thead>
                        <tr>
                            <th>ServiceDeptPersonID</th>
                            <th>ServiceDeptID</th>
                            <th>StaffID</th>
                            <th>Staff Name</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Description</th>
                            <th>UserID</th>
                            <th>Created</th>
                            <th>Modified</th>
                            <th>IsHODStaff</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personnel.map((person) => (
                            <tr key={person.id}>
                                <td>{person.serviceDeptPersonID}</td>
                                <td>{person.serviceDeptID}</td>
                                <td>{person.staffID}</td>
                                <td>
                                    {person.name} {person.isHODStaff && <span className="role-badge">HOD</span>}
                                </td>
                                <td>{person.fromDate}</td>
                                <td>{person.toDate}</td>
                                <td>{person.description}</td>
                                <td>{person.userID}</td>
                                <td>{person.created}</td>
                                <td>{person.modified}</td>
                                <td>{person.isHODStaff ? "Yes" : "No"}</td>
                                <td>
                                    <button style={{ marginLeft: "8px", backgroundColor: "white", color: "black" }} className="bi bi-pencil"></button>
                                    <button style={{ marginLeft: "8px", backgroundColor: "white", color: "black" }} className="bi bi-trash"></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DepartmentPersonnel;
