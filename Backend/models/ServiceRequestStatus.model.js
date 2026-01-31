import mongoose from "mongoose";

const serviceRequestStatusSchema = new mongoose.Schema({
  name: { type: String, required: true },
  systemName: { type: String, required: true },
  sequence: { type: Number },
  description: { type: String },
  cssClass: { type: String },
  isOpen: { type: Boolean, default: false },
  isNoFurtherActionRequired: { type: Boolean, default: false },
  isAllowedForTechnician: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("ServiceRequestStatus", serviceRequestStatusSchema);
