import ServiceRequestTypeWisePerson from "../models/ServiceRequestTypeWisePerson.model.js";

export const createServiceRequestTypeWisePerson = async (req, res) => {
  try {
    const {
      serviceRequestTypeId,
      staffId,
      fromDate,
      toDate,
      description,
      userId,
    } = req.body;

    const serviceRequestTypeWisePerson = await ServiceRequestTypeWisePerson.create({
      serviceRequestTypeId,
      staffId,
      fromDate,
      toDate,
      description,
      userId,
    });

    res.status(201).json({
      message: "Service Request Type Wise Person created successfully",
      serviceRequestTypeWisePerson,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllServiceRequestTypeWisePersons = async (req, res) => {
  try {
    const serviceRequestTypeWisePersons = await ServiceRequestTypeWisePerson.find();
    res.json(serviceRequestTypeWisePersons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceRequestTypeWisePersonById = async (req, res) => {
  try {
    const serviceRequestTypeWisePerson = await ServiceRequestTypeWisePerson.findById(req.params.id);

    if (!serviceRequestTypeWisePerson) {
      return res.status(404).json({ message: "Service Request Type Wise Person not found" });
    }

    res.json(serviceRequestTypeWisePerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateServiceRequestTypeWisePerson = async (req, res) => {
  try {
    const updatedServiceRequestTypeWisePerson = await ServiceRequestTypeWisePerson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedServiceRequestTypeWisePerson) {
      return res.status(404).json({ message: "Service Request Type Wise Person not found" });
    }

    res.json({
      message: "Service Request Type Wise Person updated successfully",
      updatedServiceRequestTypeWisePerson,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteServiceRequestTypeWisePerson = async (req, res) => {
  try {
    const deletedServiceRequestTypeWisePerson = await ServiceRequestTypeWisePerson.findByIdAndDelete(
      req.params.id
    );

    console.log(req.params.id);
    if (!deletedServiceRequestTypeWisePerson) {
      return res.status(404).json({ message: "Service Request Type Wise Person not found" });
    }

    res.json({ message: "Service Request Type Wise Person deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
