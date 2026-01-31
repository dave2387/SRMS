import mongoose from "mongoose";

const serviceRequestSchema = new mongoose.Schema({
  requestNo: { type: String, required: true, unique: true },
  requestDateTime: { type: Date, default: Date.now },
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  serviceRequestTypeId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequestType", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  statusId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequestStatus", required: true },
  statusDateTime: { type: Date },
  approvalStatus: { type: String },
  assignedToUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assignedDateTime: { type: Date },
  priorityLevel: { type: String },
  attachments: [{ type: String }],
  resourceId: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("ServiceRequest", serviceRequestSchema);
