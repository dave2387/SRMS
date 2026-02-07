import ServiceRequestStatus from "../models/ServiceRequestStatus.model.js";

export const createServiceRequestStatus = async (req, res) => {
  try {
    const {
      name,
      systemName,
      sequence,
      description,
      cssClass,
      isOpen,
      isNoFurtherActionRequired,
      isAllowedForTechnician,
      userId,
    } = req.body;

    const serviceRequestStatus = await ServiceRequestStatus.create({
      name,
      systemName,
      sequence,
      description,
      cssClass,
      isOpen,
      isNoFurtherActionRequired,
      isAllowedForTechnician,
      userId,
    });

    res.status(201).json({
      message: "Service Request Status created successfully",
      serviceRequestStatus,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllServiceRequestStatuses = async (req, res) => {
  try {
    const serviceRequestStatuses = await ServiceRequestStatus.find();
    res.json(serviceRequestStatuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceRequestStatusById = async (req, res) => {
  try {
    const serviceRequestStatus = await ServiceRequestStatus.findById(req.params.id);

    if (!serviceRequestStatus) {
      return res.status(404).json({ message: "Service Request Status not found" });
    }

    res.json(serviceRequestStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateServiceRequestStatus = async (req, res) => {
  try {
    const updatedServiceRequestStatus = await ServiceRequestStatus.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedServiceRequestStatus) {
      return res.status(404).json({ message: "Service Request Status not found" });
    }

    res.json({
      message: "Service Request Status updated successfully",
      updatedServiceRequestStatus,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteServiceRequestStatus = async (req, res) => {
  try {
    const deletedServiceRequestStatus = await ServiceRequestStatus.findByIdAndDelete(
      req.params.id
    );

    if (!deletedServiceRequestStatus) {
      return res.status(404).json({ message: "Service Request Status not found" });
    }

    res.json({ message: "Service Request Status deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
