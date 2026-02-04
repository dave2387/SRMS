import express from "express"
import { dbConnect  } from "./config/db.js";
import servicetypeRoute from "./routes/ServiceType.route.js"
import ServicedeptRoute from "./routes/ServiceDept.route.js"

const PORT = process.env.PORT || 3000;
const app = express();
dbConnect();
app.use(express.json());
app.use("/api/servicetype",servicetypeRoute);
app.use("/api/servicedept",ServicedeptRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));