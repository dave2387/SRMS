import ServiceRequest from "../models/ServiceRequest.model.js";

export const createServiceRequest = async (req, res) => {
  try {
    const {
      requestNo,
      requestDateTime,
      staffId,
      studentId,
      serviceRequestTypeId,
      title,
      description,
      statusId,
      statusDateTime,
      approvalStatus,
      assignedToUserId,
      assignedDateTime,
      priorityLevel,
      attachments,
      resourceId,
      userId,
    } = req.body;

    const serviceRequest = await ServiceRequest.create({
      requestNo,
      requestDateTime,
      staffId,
      studentId,
      serviceRequestTypeId,
      title,
      description,
      statusId,
      statusDateTime,
      approvalStatus,
      assignedToUserId,
      assignedDateTime,
      priorityLevel,
      attachments,
      resourceId,
      userId,
    });

    res.status(201).json({
      message: "Service Request created successfully",
      serviceRequest,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllServiceRequests = async (req, res) => {
  try {
    const serviceRequests = await ServiceRequest.find();
    res.json(serviceRequests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceRequestById = async (req, res) => {
  try {
    const serviceRequest = await ServiceRequest.findById(req.params.id);

    if (!serviceRequest) {
      return res.status(404).json({ message: "Service Request not found" });
    }

    res.json(serviceRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateServiceRequest = async (req, res) => {
  try {
    const updatedServiceRequest = await ServiceRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedServiceRequest) {
      return res.status(404).json({ message: "Service Request not found" });
    }

    res.json({
      message: "Service Request updated successfully",
      updatedServiceRequest,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteServiceRequest = async (req, res) => {
  try {
    const deletedServiceRequest = await ServiceRequest.findByIdAndDelete(
      req.params.id
    );

    if (!deletedServiceRequest) {
      return res.status(404).json({ message: "Service Request not found" });
    }

    res.json({ message: "Service Request deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
    