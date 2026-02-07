import express from "express";

import {
  createServiceDeptPerson,
  getAllServiceDeptPersons,
  getServiceDeptPersonById,
  updateServiceDeptPerson,
  deleteServiceDeptPerson,
} from "../controllers/ServiceDeptPerson.controller.js";

const router = express.Router();

router.post("/createSer", createServiceDeptPerson);
router.get("/getAll", getAllServiceDeptPersons);
router.get("/:id", getServiceDeptPersonById);
router.patch("/:id", updateServiceDeptPerson);
router.delete("/:id", deleteServiceDeptPerson);

export default router;
