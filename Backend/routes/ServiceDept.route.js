import express from "express";
import {
  createServiceDept,
  deleteServiceDept,
  getAllServiceDepts,
  getServiceDeptById,
  updateServiceDept,
} from "../controllers/ServiceDept.controller.js";

const router = express.Router();

router.post("/createSer", createServiceDept);
router.get("/getAll", getAllServiceDepts);
router.get("/:id",getServiceDeptById);
router.delete("/:id",deleteServiceDept);
router.patch("/:id",updateServiceDept); 

export default  router; 