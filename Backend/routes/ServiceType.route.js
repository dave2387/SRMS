import express from "express";
import {
  createServiceType,
  getAllServiceTypes,
} from "../controllers/ServiceType.controller.js";

const router = express.Router();

router.post("/createSer", createServiceType);
router.get("/getAll", getAllServiceTypes);

export default  router;