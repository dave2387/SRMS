import ServiceTypeModel from "../models/ServiceType.model.js";

export const createServiceType = async (req, res) => {
  try {
    const { name, description, sequence, isForStaff, isForStudent, userId } =
      req.body;

    const exists = await ServiceTypeModel.findOne({ name, userId });

    if (exists) {
      return res.status(400).json({
        message: "Service type with same name already exists for this user",
      });
    }

    const serviceType = await ServiceTypeModel.create({
      name,
      description,
      sequence,
      isForStaff,
      isForStudent,
      userId,
    });

    res.status(201).json({
      message: "Service type created successfully",
      serviceType,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllServiceTypes = async (req, res) => {
  try {
    const serviceTypes = await ServiceTypeModel.find();
    res.json(serviceTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceTypeById = async (req, res) => {
  try {
    const serviceType = await ServiceTypeModel.findById(req.params.id);

    if (!serviceType) {
      return res.status(404).json({ message: "Service Type not found" });
    }

    res.json(serviceType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateServiceType = async (req, res) => {
  try {
    const updatedServiceType = await ServiceTypeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedServiceType) {
      return res.status(404).json({ message: "Service Type not found" });
    }

    res.json({
      message: "Service Type updated successfully",
      updatedServiceType,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteServiceType = async (req, res) => {
  try {
    const deletedServiceType = await ServiceTypeModel.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedServiceType) {
      return res.status(404).json({ message: "Service Type not found" });
    }

    res.json({ message: "Service Type deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};