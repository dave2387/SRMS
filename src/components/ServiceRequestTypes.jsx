import React from "react";
import "./ServiceRequestTypes.css";

const ServiceRequestTypes = () => {
    const data = [
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
    ];

    const getPriorityClass = (priority) => {
        if (priority === "High") return "priority-high";
        if (priority === "Medium") return "priority-medium";
        return "priority-low";
    };

    return (
        <div className="srt-container">
            {/* Header */}
            <div className="srt-header">
                <div>
                    <h1>Service Request Types<br></br>
                        <h5>Define specific request types under each service category</h5></h1>
                </div>
                <button className="add-btn">+ Add Request Type</button>
            </div>

            {/* Table */}
            <div className="srt-table-wrapper">
                <table className="srt-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Request Type</th>
                            <th>Category</th>
                            <th>Department</th>
                            <th>Default Priority</th>
                            <th>Stats (Total / Open / Closed)</th>
                            <th>Visible</th>
                            <th>Mandatory</th>
                            <th>Reminder (Days)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr key={item.ServiceRequestTypeID}>
                                <td>{item.ServiceRequestTypeID}</td>
                                <td>{item.ServiceRequestTypeName}</td>
                                <td>{item.ServiceTypeName}</td>
                                <td>{item.ServiceDeptName}</td>

                                <td>
                                    <span className={`priority ${getPriorityClass(item.DefaultPriorityLevel)}`}>
                                        {item.DefaultPriorityLevel}
                                    </span>
                                </td>

                                <td className="stats">
                                    <span>{item.RequestTotal}</span> /
                                    <span className="open"> {item.RequestPending}</span> /
                                    <span className="closed"> {item.RequestClosed}</span>
                                </td>

                                <td>{item.IsVisibleResource ? "Yes" : "No"}</td>
                                <td>{item.IsMandatoryResource ? "Yes" : "No"}</td>
                                <td>{item.ReminderDaysAfterAssignment}</td>

                                <td className="actions">
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

export default ServiceRequestTypes;
