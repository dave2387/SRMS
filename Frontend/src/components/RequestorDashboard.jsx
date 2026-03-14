import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RequestorDashboard.css";
import { useAuth } from "./AuthContext";

const RequestorDashboard = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    department: "",
    status: "Pending",
    priority: "Medium",
  });

  // Fetch service requests from MongoDB
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/servicerequest/getAll");
        
        // Transform MongoDB data to match frontend format
        const transformedRequests = response.data.map((req) => ({
          id: req.requestNo,
          title: req.title,
          category: req.description,
          department: req.department || "Not Assigned",
          status: req.statusId ? "In Progress" : "Pending",
          priority: req.priorityLevel || "Medium",
          created: new Date(req.requestDateTime).toLocaleDateString(),
          mongoId: req._id,
        }));

        setRequests(transformedRequests);
        setError(null);
      } catch (err) {
        console.error("Error fetching requests:", err);
        setError("Failed to load requests. Please try again later.");
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateRequestId = () => {
    // Generate request number based on timestamp
    const timestamp = Date.now();
    return `SR-${timestamp}`;
  };

  const getTodayDate = () => {
    const today = new Date();
    return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  };

  const getStatusClass = (status) => {
    if (status === "In Progress") return "progress";
    if (status === "Pending") return "pending";
    if (status === "Completed") return "completed";
    return "";
  };

  const getPriorityClass = (priority) => {
    if (priority === "High") return "high";
    if (priority === "Medium") return "medium";
    if (priority === "Low") return "low";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !formData.department) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const requestNo = generateRequestId();
      const payloadData = {
        requestNo: requestNo,
        title: formData.title,
        description: formData.category,
        department: formData.department,
        priorityLevel: formData.priority,
        statusId: formData.status === "Pending" ? null : "123", // Use placeholder for status
        userId: user?.email || "anonymous", // Use email as identifier
        userEmail: user?.email || "anonymous", // Store email for tracking
        requestDateTime: new Date(),
      };

      // POST request to MongoDB backend
      const response = await axios.post(
        "http://localhost:3000/api/servicerequest/createSer",
        payloadData
      );

      // Add new request to local state
      const newRequest = {
        id: requestNo,
        title: formData.title,
        category: formData.category,
        department: formData.department,
        status: formData.status,
        priority: formData.priority,
        created: getTodayDate(),
        mongoId: response.data.serviceRequest._id,
      };

      setRequests([...requests, newRequest]);
      setFormData({
        title: "",
        category: "",
        department: "",
        status: "Pending",
        priority: "Medium",
      });
      setShowModal(false);
      alert("Service request created successfully!");
    } catch (err) {
      console.error("Error creating request:", err);
      alert("Failed to create service request. Please try again.");
    }
  };

  return (
    <div className="requestor-wrapper">
      {/* HEADER */}
      <div className="dashboard-top">
        <h4>Requestor Dashboard</h4>

        <div className="top-actions">
          <div className="search-box">
            <i className="bi bi-search" aria-label="Search Icon"></i>
            <input type="text" placeholder="Search requests..." />
          </div>

          <div className="notification">
            <i className="bi bi-bell" aria-label="Notifications"></i>
            <span className="badge">3</span>
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="stats-row">
        <div className="stat-card blue">
          <div>
            <p>My Requests</p>
            <h3>{requests.length}</h3>
          </div>
          <i className="bi bi-send"></i>
        </div>

        <div className="stat-card orange">
          <div>
            <p>Pending</p>
            <h3>{requests.filter((r) => r.status === "Pending").length}</h3>
          </div>
          <i className="bi bi-clock"></i>
        </div>

        <div className="stat-card purple">
          <div>
            <p>In Progress</p>
            <h3>
              {requests.filter((r) => r.status === "In Progress").length}
            </h3>
          </div>
          <i className="bi bi-chat-dots"></i>
        </div>

        <div className="stat-card green">
          <div>
            <p>Completed</p>
            <h3>{requests.filter((r) => r.status === "Completed").length}</h3>
          </div>
          <i className="bi bi-check-circle"></i>
        </div>
      </div>

      {/* RAISE BUTTON */}
      <button
        type="button"
        className="raise-btn"
        onClick={() => setShowModal(true)}
      >
        <i className="bi bi-plus-lg"></i>
        Raise New Request
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Create New Service Request</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="request-form">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter request title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="E.g., Computer Issue, AC Repair"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="IT Department">IT Department</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="priority">Priority</label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Create Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="table-card">
        <h3>My Service Requests</h3>

        {loading && <p className="loading-message">Loading service requests...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && requests.length === 0 && (
          <p className="no-data-message">No service requests found. Create your first request!</p>
        )}

        {!loading && requests.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Request #</th>
                <th>Title</th>
                <th>Department</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Created</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr key={request.mongoId || request.id}>
                  <td>{request.id}</td>
                  <td>
                    {request.title}
                    <span>{request.category}</span>
                  </td>
                  <td>{request.department}</td>
                  <td>
                    <span className={`status ${getStatusClass(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className={getPriorityClass(request.priority)}>
                    {request.priority}
                  </td>
                  <td>{request.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RequestorDashboard;
