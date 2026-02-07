import express from "express";
import { dbConnect } from "./config/db.js";

import servicetypeRoute from "./routes/ServiceType.route.js";
import servicedeptRoute from "./routes/ServiceDept.route.js";
import serviceDeptPersonRoute from "./routes/ServiceDeptPerson.route.js";
import serviceRequestRoute from "./routes/ServiceRequest.route.js";
import serviceRequestReplyRoute from "./routes/ServiceRequestReply.route.js";
import serviceRequestStatusRoute from "./routes/ServiceRequestStatus.route.js";
import serviceRequestTypeRoute from "./routes/ServiceRequestType.route.js";
import serviceRequestTypeWisePersonRoute from "./routes/ServiceRequestTypeWisePerson.route.js";

const PORT = process.env.PORT || 3000;
const app = express();

dbConnect();

app.use(express.json());

app.use("/api/servicetype", servicetypeRoute);
app.use("/api/servicedept", servicedeptRoute);
app.use("/api/servicedeptperson", serviceDeptPersonRoute);
app.use("/api/servicerequest", serviceRequestRoute);
app.use("/api/servicerequestreply", serviceRequestReplyRoute);
app.use("/api/servicerequeststatus", serviceRequestStatusRoute);
app.use("/api/servicerequesttype", serviceRequestTypeRoute);
app.use("/api/servicerequesttypewiseperson", serviceRequestTypeWisePersonRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
