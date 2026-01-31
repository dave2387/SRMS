import mongoose from "mongoose";

const serviceRequestReplySchema = new mongoose.Schema({
  serviceRequestId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequest", required: true },
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
  replyDateTime: { type: Date, default: Date.now },
  replyDescription: { type: String, required: true },
  attachmentPath: { type: String },
  statusId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequestStatus", required: true },
  statusDateTime: { type: Date, default: Date.now },
  statusByUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  serviceRequestTypeId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequestType" },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("ServiceRequestReply", serviceRequestReplySchema);
