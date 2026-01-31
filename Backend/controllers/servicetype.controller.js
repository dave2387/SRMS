import ServiceType from "../models/ServiceType.model";


export const createServiceType = async (req, res) => {
  try {
    const {
      name,
      description,
      sequence,
      isForStaff,
      isForStudent,
      userId,
    } = req.body;

    const exists = await ServiceType.findOne({
      name,
      description,
      userId,
    });

    if (exists) {
      return res.status(400).json({
        message:
          "Service type with same name and description already exists for this user",
      });
    }

    const serviceType = await ServiceType.create({
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
    const serviceTypes = await ServiceType.find();
    res.json(serviceTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
