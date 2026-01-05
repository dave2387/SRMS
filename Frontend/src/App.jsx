import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import WelcomeMsg from "./components/WelcomeMsg";
import Dashboard from "./components/Dashboard";
import ServiceDepartments from "./components/ServiceDepartments";
import DepartmentPersonnel from "./components/DepartmentPersonnel"
import ServiceTypes from "./components/ServiceTypes";
import ServiceRequestTypes from "./components/ServiceRequestTypes";
import ServiceRequestTypeWisePerson from "./components/ServiceRequestTypeWisePerson";
import HodDashboard from "./components/HODDashboard";
import Request_status from "./components/Request_status";
import RequestorDashboard from "./components/RequestorDashboard";
import TechnicianDashboard from "./components/TechnicianDashboard";
import React from "react";
// import ServiceRequests from "./components/ServiceRequests";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route index element={<WelcomeMsg />} />
          <Route path="request_dash" element={<Dashboard />} />
          <Route path="/request_status" element={<Request_status/>} />
          <Route path="/service_dept" element={<ServiceDepartments/>} />
          <Route path="/dept_person" element={<DepartmentPersonnel/>} />
          <Route path="/service_type" element={<ServiceTypes/>} />
          <Route path="/req_type" element={<ServiceRequestTypes/>} />
          <Route path="/ser_req_type_wp" element={<ServiceRequestTypeWisePerson/>} />
          <Route path="/hod_dashboard" element={<HodDashboard/>} />
          <Route path="/requestor_dashboard" element={<RequestorDashboard/>} />
          <Route path="/Tech_dashboard" element={<TechnicianDashboard/>} />
          {/* <Route path="/Service_request" element={<ServiceRequests/>} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
