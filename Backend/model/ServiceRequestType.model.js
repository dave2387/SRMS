import mongoose from "mongoose";

const serviceRequestTypeSchema = new mongoose.Schema({
  serviceTypeId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceType", required: true },
  serviceDeptId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceDept", required: true },
  name: { type: String, required: true },
  description: { type: String },
  sequence: { type: Number },
  requestTotal: { type: Number, default: 0 },
  requestPending: { type: Number, default: 0 },
  requestClosed: { type: Number, default: 0 },
  requestCancelled: { type: Number, default: 0 },
  isVisibleResource: { type: Boolean, default: true },
  defaultPriorityLevel: { type: String },
  reminderDaysAfterAssignment: { type: Number },
  isMandatoryResource: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("ServiceRequestType", serviceRequestTypeSchema);
