import ServiceRequestReply from "../models/ServiceRequestReply.model.js";

export const createServiceRequestReply = async (req, res) => {
  try {
    const {
      serviceRequestId,
      staffId,
      replyDateTime,
      replyDescription,
      attachmentPath,
      statusId,
      statusDateTime,
      statusByUserId,
      serviceRequestTypeId,
      studentId,
      userId,
    } = req.body;

    const serviceRequestReply = await ServiceRequestReply.create({
      serviceRequestId,
      staffId,
      replyDateTime,
      replyDescription,
      attachmentPath,
      statusId,
      statusDateTime,
      statusByUserId,
      serviceRequestTypeId,
      studentId,
      userId,
    });

    res.status(201).json({
      message: "Service Request Reply created successfully",
      serviceRequestReply,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllServiceRequestReplies = async (req, res) => {
  try {
    const serviceRequestReplies = await ServiceRequestReply.find();
    res.json(serviceRequestReplies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceRequestReplyById = async (req, res) => {
  try {
    const serviceRequestReply = await ServiceRequestReply.findById(req.params.id);

    if (!serviceRequestReply) {
      return res.status(404).json({ message: "Service Request Reply not found" });
    }

    res.json(serviceRequestReply);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateServiceRequestReply = async (req, res) => {
  try {
    const updatedServiceRequestReply = await ServiceRequestReply.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedServiceRequestReply) {
      return res.status(404).json({ message: "Service Request Reply not found" });
    }

    res.json({
      message: "Service Request Reply updated successfully",
      updatedServiceRequestReply,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteServiceRequestReply = async (req, res) => {
  try {
    const deletedServiceRequestReply = await ServiceRequestReply.findByIdAndDelete(
      req.params.id
    );

    if (!deletedServiceRequestReply) {
      return res.status(404).json({ message: "Service Request Reply not found" });
    }

    res.json({ message: "Service Request Reply deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
