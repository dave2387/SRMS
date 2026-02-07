import express from "express";

import {
  createServiceRequestType,
  getAllServiceRequestTypes,
  getServiceRequestTypeById,
  updateServiceRequestType,
  deleteServiceRequestType,
} from "../controllers/ServiceRequestType.controller.js";

const router = express.Router();

router.post("/createSer", createServiceRequestType);
router.get("/getAll", getAllServiceRequestTypes);
router.get("/:id", getServiceRequestTypeById);
router.patch("/:id", updateServiceRequestType);
router.delete("/:id", deleteServiceRequestType);

export default router;