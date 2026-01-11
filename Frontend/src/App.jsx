// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";

// import WelcomeMsg from "./components/WelcomeMsg";
// import Dashboard from "./components/Dashboard";
// import ServiceDepartments from "./components/ServiceDepartments";
// import DepartmentPersonnel from "./components/DepartmentPersonnel"
// import ServiceTypes from "./components/ServiceTypes";
// import ServiceRequestTypes from "./components/ServiceRequestTypes";
// import ServiceRequestTypeWisePerson from "./components/ServiceRequestTypeWisePerson";
// import HodDashboard from "./components/HODDashboard";
// import Request_status from "./components/Request_status";
// import RequestorDashboard from "./components/RequestorDashboard";
// import TechnicianDashboard from "./components/TechnicianDashboard";
// import LoginPage from "./components/Loginpage";
// // import ServiceRequests from "./components/ServiceRequests";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route index element={<WelcomeMsg />} />
//           <Route path="request_dash" element={<Dashboard />} />
//           <Route path="/request_status" element={<Request_status />} />
//           <Route path="/service_dept" element={<ServiceDepartments />} />
//           <Route path="/dept_person" element={<DepartmentPersonnel />} />
//           <Route path="/service_type" element={<ServiceTypes />} />
//           <Route path="/req_type" element={<ServiceRequestTypes />} />
//           <Route path="/ser_req_type_wp" element={<ServiceRequestTypeWisePerson />} />
//           <Route path="/hod_dashboard" element={<HodDashboard />} />
//           <Route path="/requestor_dashboard" element={<RequestorDashboard />} />
//           <Route path="/Tech_dashboard" element={<TechnicianDashboard />} />
//           {/* <Route path="/Service_request" element={<ServiceRequests/>} /> */}

//         </Route>
//         <Route path="/profile" element={<LoginPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


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

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* LOGIN */}
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
            {/* <Route path="service-requests" element={<ServiceRequests />} /> */}
            <Route path="request-status" element={<RequestStatus />} />
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
            {/* <Route path="service-requests" element={<ServiceRequests />} /> */}
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
            {/* <Route path="service-requests" element={<ServiceRequests />} /> */}
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
            {/* <Route path="service-requests" element={<ServiceRequests />} /> */}
            <Route path="request-status" element={<RequestStatus />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
