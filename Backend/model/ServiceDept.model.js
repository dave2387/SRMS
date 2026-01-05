import mongoose from "mongoose";

const serviceDeptSchema = new mongoose.Schema({
  name: { type: String, required: true },
  campusId: { type: mongoose.Schema.Types.ObjectId, ref: "Campus" },
  description: { type: String },
  ccEmailTo: { type: String },
  isRequestTitleDisable: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("ServiceDept", serviceDeptSchema);
