import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";

// ADMIN
import Dashboard from "./components/Dashboard";
import ServiceDepartments from "./components/ServiceDepartments";
import ServiceTypes from "./components/ServiceTypes";
import ServiceRequestTypes from "./components/ServiceRequestTypes";
import ServiceRequestTypeWisePerson from "./components/ServiceRequestTypeWisePerson";
import DepartmentPersonnel from "./components/DepartmentPersonnel";

// HOD
import HodDashboard from "./components/HodDashboard";

// TECHNICIAN
import TechnicianDashboard from "./components/TechnicianDashboard";

// REQUESTOR
import RequestorDashboard from "./components/RequestorDashboard";

// COMMON
// import ServiceRequests from "./components/ServiceRequests";
import RequestStatus from "./components/Request_status";
import Service_request from "./components/Service_Request.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* LOGIN */}
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage />} />

          {/* ADMIN ROUTES */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="service_dept" element={<ServiceDepartments />} />
            <Route path="service-types" element={<ServiceTypes />} />
            <Route path="service-request-types" element={<ServiceRequestTypes />} />
            <Route path="service-type-wise-person" element={<ServiceRequestTypeWisePerson />} />
            <Route path="department-personnel" element={<DepartmentPersonnel />} />
            <Route path="request-status" element={<RequestStatus />} />
            <Route path="service_requests" element={<Service_request />} />

          </Route>

          {/* HOD ROUTES */}
          <Route
            path="/hod"
            element={
              <ProtectedRoute allowedRoles={["hod"]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<HodDashboard />} />
            <Route path="department-personnel" element={<DepartmentPersonnel />} />
            <Route path="service_requests" element={<Service_request />} />
          </Route>

          {/* TECHNICIAN ROUTES */}
          <Route
            path="/technician"
            element={
              <ProtectedRoute allowedRoles={["technician"]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<TechnicianDashboard />} />
            <Route path="service_requests" element={<Service_request/>} />
            <Route path="request-status" element={<RequestStatus />} />
          </Route>

          {/* REQUESTOR ROUTES */}
          <Route
            path="/requestor"
            element={
              <ProtectedRoute allowedRoles={["requestor"]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<RequestorDashboard />} />
            <Route path="service_requests" element={<Service_request/>} />
            <Route path="request-status" element={<RequestStatus />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
