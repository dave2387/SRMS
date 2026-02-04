import express from "express";

import {
  createServiceType,
  deleteServiceType,
  getAllServiceTypes,
  getServiceTypeById,
  updateServiceType,
} from "../controllers/ServiceType.controller.js";

const router = express.Router();

router.post("/createSer", createServiceType);
router.get("/getAll", getAllServiceTypes);
router.get("/:id", getServiceTypeById);
router.delete("/:id", deleteServiceType);
router.patch("/:id", updateServiceType);

export default router;