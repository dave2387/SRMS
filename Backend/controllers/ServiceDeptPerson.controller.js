import ServiceDeptPerson from "../models/ServiceDeptPerson.model.js";

export const createServiceDeptPerson = async (req, res) => {
  try {
    const {
      serviceDeptId,
      staffId,
      fromDate,
      toDate,
      isHODStaff,
      description,
      userId,
    } = req.body;

    const serviceDeptPerson = await ServiceDeptPerson.create({
      serviceDeptId,
      staffId,
      fromDate,
      toDate,
      isHODStaff,
      description,
      userId,
    });

    res.status(201).json({
      message: "Service Department Person created successfully",
      serviceDeptPerson,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllServiceDeptPersons = async (req, res) => {
  try {
    const serviceDeptPersons = await ServiceDeptPerson.find();
    res.json(serviceDeptPersons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceDeptPersonById = async (req, res) => {
  try {
    const serviceDeptPerson = await ServiceDeptPerson.findById(req.params.id);

    if (!serviceDeptPerson) {
      return res.status(404).json({ message: "Service Department Person not found" });
    }

    res.json(serviceDeptPerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateServiceDeptPerson = async (req, res) => {
  try {
    const updatedServiceDeptPerson = await ServiceDeptPerson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedServiceDeptPerson) {
      return res.status(404).json({ message: "Service Department Person not found" });
    }

    res.json({
      message: "Service Department Person updated successfully",
      updatedServiceDeptPerson,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteServiceDeptPerson = async (req, res) => {
  try {
    const deletedServiceDeptPerson = await ServiceDeptPerson.findByIdAndDelete(
      req.params.id
    );

    if (!deletedServiceDeptPerson) {
      return res.status(404).json({ message: "Service Department Person not found" });
    }

    res.json({ message: "Service Department Person deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
