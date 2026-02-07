import express from "express";

import {
  createServiceRequestTypeWisePerson,
  getAllServiceRequestTypeWisePersons,
  getServiceRequestTypeWisePersonById,
  updateServiceRequestTypeWisePerson,
  deleteServiceRequestTypeWisePerson,
} from "../controllers/ServiceRequestTypeWisePerson.controller.js";

const router = express.Router();

router.post("/createSer", createServiceRequestTypeWisePerson);
router.get("/getAll", getAllServiceRequestTypeWisePersons);
router.get("/:id", getServiceRequestTypeWisePersonById);
router.patch("/:id", updateServiceRequestTypeWisePerson);
router.delete("/:id", deleteServiceRequestTypeWisePerson);

export default router;