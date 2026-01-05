import mongoose from "mongoose";

const serviceDeptPersonSchema = new mongoose.Schema({
  serviceDeptId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceDept", required: true },
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date },
  isHODStaff: { type: Boolean, default: false },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("ServiceDeptPerson", serviceDeptPersonSchema);
