import express from "express";

import {
  createServiceRequestReply,
  getAllServiceRequestReplies,
  getServiceRequestReplyById,
  updateServiceRequestReply,
  deleteServiceRequestReply,
} from "../controllers/ServiceRequestReply.controller.js";

const router = express.Router();

router.post("/createSer", createServiceRequestReply);
router.get("/getAll", getAllServiceRequestReplies);
router.get("/:id", getServiceRequestReplyById);
router.patch("/:id", updateServiceRequestReply);
router.delete("/:id", deleteServiceRequestReply);

export default router;
