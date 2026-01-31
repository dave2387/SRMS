import mongoose from "mongoose";

const serviceTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  sequence: { type: Number },
  isForStaff: { type: Boolean, default: true },
  isForStudent: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("ServiceType", serviceTypeSchema);
