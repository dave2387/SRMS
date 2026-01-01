import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import WelcomeMsg from "./components/WelcomeMsg";
import Dashboard from "./components/Dashboard";
import RequestStatus from "./components/RequestStatus";
import ServiceDepartments from "./components/ServiceDepartments";
import DepartmentPersonnel from "./components/DepartmentPersonnel ";
import Service_status from "./components/Service_status";
import ServiceTypes from "./components/ServiceTypes";
import ServiceRequestTypes from "./components/ServiceRequestTypes";
import ServiceRequestTypeWisePerson from "./components/ServiceRequestTypeWisePerson";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          {/* This renders ONLY when path = "/" */}
          <Route index element={<WelcomeMsg />} />

          <Route path="request_dash" element={<Dashboard />} />
          <Route path="/request_status" element={<Service_status/>} />
          <Route path="/service_dept" element={<ServiceDepartments/>} />
          <Route path="/dept_person" element={<DepartmentPersonnel/>} />
          <Route path="/service_type" element={<ServiceTypes/>} />
          <Route path="/req_type" element={<ServiceRequestTypes/>} />
          <Route path="/ser_req_type_wp" element={<ServiceRequestTypeWisePerson/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
