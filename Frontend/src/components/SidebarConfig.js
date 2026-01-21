// Role-based menu configuration for Sidebar
const sidebarConfig = {
  admin: [
    {
      title: "Dashboards",
      icon: "bi bi-grid",
      submenu: [{ label: "Admin Dashboard", path: "/admin/dashboard" }],
    },
    {
      title: "Master Setup",
      icon: "bi bi-gear",
      submenu: [
        { label: "Request Status", path: "/admin/request-status" },
        { label: "Service Departments", path: "/admin/service_dept" },
        { label: "Department Personnel", path: "/admin/department-personnel" },
        { label: "Service Types", path: "/admin/service-types" },
        { label: "Request Types", path: "/admin/service-request-types" },
        { label: "Type-Wise Person Mapping", path: "/admin/service-type-wise-person" },
      ],
    },
    { title: "Service_Requests", icon: "bi bi-ticket-detailed", path: "/admin/service_requests" },
  ],
  hod: [
    { title: "Dashboards", icon: "bi bi-grid", submenu: [{ label: "HOD Dashboard", path: "/hod/dashboard" }] },
    { title: "Service_Requests", icon: "bi bi-ticket-detailed", path: "/hod/service_requests" },
  ],
  technician: [
    { title: "Dashboards", icon: "bi bi-grid", submenu: [{ label: "Technician Dashboard", path: "/technician/dashboard" }] },
    { title: "Service_Requests", icon: "bi bi-ticket-detailed", path: "/technician/service_requests" },
    { title: "Request Status", icon: "bi bi-info-circle", path: "/technician/request-status" },
  ],
  requestor: [
    { title: "Dashboards", icon: "bi bi-grid", submenu: [{ label: "Requestor Dashboard", path: "/requestor/dashboard" }] },
    { title: "Service_Requests", icon: "bi bi-ticket-detailed", path: "/requestor/service_requests" },
    { title: "Request Status", icon: "bi bi-info-circle", path: "/requestor/request-status" },
  ],
};

export default sidebarConfig;
