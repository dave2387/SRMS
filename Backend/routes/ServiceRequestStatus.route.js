import express from "express";

import {
  createServiceRequestStatus,
  getAllServiceRequestStatuses,
  getServiceRequestStatusById,
  updateServiceRequestStatus,
  deleteServiceRequestStatus,
} from "../controllers/ServiceRequestStatus.controller.js";

const router = express.Router();

router.post("/createSer", createServiceRequestStatus);
router.get("/getAll", getAllServiceRequestStatuses);
router.get("/:id", getServiceRequestStatusById);
router.patch("/:id", updateServiceRequestStatus);
router.delete("/:id", deleteServiceRequestStatus);

export default router;