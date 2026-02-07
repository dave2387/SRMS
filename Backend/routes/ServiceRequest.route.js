import express from "express";

import {
  createServiceRequest,
  getAllServiceRequests,
  getServiceRequestById,
  updateServiceRequest,
  deleteServiceRequest,
} from "../controllers/ServiceRequest.controller.js";

const router = express.Router();

router.post("/createSer", createServiceRequest);
router.get("/getAll", getAllServiceRequests);
router.get("/:id", getServiceRequestById);
router.patch("/:id", updateServiceRequest);
router.delete("/:id", deleteServiceRequest);

export default router;