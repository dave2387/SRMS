import ServiceDeptModel from "../models/ServiceDept.model.js";

export const createServiceDept = async (req, res) => {
  try {
    const {
      name,
      campusId,
      description,
      ccEmailTo,
      isRequestTitleDisable,
      userId,
    } = req.body;

    if (!name || !userId) {
      return res.status(400).json({ message: "Name and userId are required" });
    }

    const exist = await ServiceDeptModel.findOne({ name, userId });

    if (exist) {
      return res.status(400).json({
        message: "Department already exists",
      });
    }

    const serviceDept = await ServiceDeptModel.create({
      name,
      campusId,
      description,
      ccEmailTo,
      isRequestTitleDisable,
      userId,
    });

    res.status(201).json({
      message: "Service Department created successfully",
      serviceDept,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllServiceDepts = async (req, res) => {
  try {
    const ServiceDept = await ServiceDeptModel.find();
    res.json(ServiceDept);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceDeptById = async (req, res) => {
  try {
    const serviceDept = await ServiceDeptModel.findById(req.params.id);

    if (!serviceDept) {
      return res.status(404).json({ message: "Service Dept not found" });
    }

    res.json(serviceDept);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateServiceDept = async (req, res) => {
  try {
    const updatedServiceDept = await ServiceDeptModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedServiceDept) {
      return res.status(404).json({ message: "Service Dept not found" });
    }

    res.json({
      message: "Service Dept updated successfully",
      updatedServiceDept,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteServiceDept = async (req, res) => {
  try {
    const deletedServiceDept = await ServiceDeptModel.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedServiceDept) {
      return res.status(404).json({ message: "Service Dept not found" });
    }

    res.json({ message: "Service Dept deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
};