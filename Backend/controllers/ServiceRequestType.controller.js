import ServiceRequestType from "../models/ServiceRequestType.model.js";

export const createServiceRequestType = async (req, res) => {
  try {
    const {
      serviceTypeId,
      serviceDeptId,
      name,
      description,
      sequence,
      requestTotal,
      requestPending,
      requestClosed,
      requestCancelled,
      isVisibleResource,
      defaultPriorityLevel,
      reminderDaysAfterAssignment,
      isMandatoryResource,
      userId,
    } = req.body;

    const serviceRequestType = await ServiceRequestType.create({
      serviceTypeId,
      serviceDeptId,
      name,
      description,
      sequence,
      requestTotal,
      requestPending,
      requestClosed,
      requestCancelled,
      isVisibleResource,
      defaultPriorityLevel,
      reminderDaysAfterAssignment,
      isMandatoryResource,
      userId,
    });

    res.status(201).json({
      message: "Service Request Type created successfully",
      serviceRequestType,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllServiceRequestTypes = async (req, res) => {
  try {
    const serviceRequestTypes = await ServiceRequestType.find();
    res.json(serviceRequestTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceRequestTypeById = async (req, res) => {
  try {
    const serviceRequestType = await ServiceRequestType.findById(req.params.id);

    if (!serviceRequestType) {
      return res.status(404).json({ message: "Service Request Type not found" });
    }

    res.json(serviceRequestType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateServiceRequestType = async (req, res) => {
  try {
    const updatedServiceRequestType = await ServiceRequestType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedServiceRequestType) {
      return res.status(404).json({ message: "Service Request Type not found" });
    }

    res.json({
      message: "Service Request Type updated successfully",
      updatedServiceRequestType,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteServiceRequestType = async (req, res) => {
  try {
    const deletedServiceRequestType = await ServiceRequestType.findByIdAndDelete(
      req.params.id
    );

    if (!deletedServiceRequestType) {
      return res.status(404).json({ message: "Service Request Type not found" });
    }

    res.json({ message: "Service Request Type deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
