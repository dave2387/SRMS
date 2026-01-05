import mongoose from "mongoose";

const serviceRequestTypeWisePersonSchema = new mongoose.Schema({
  serviceRequestTypeId: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequestType", required: true },
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export default mongoose.model("ServiceRequestTypeWisePerson", serviceRequestTypeWisePersonSchema);
