const Property = require("../models/PropertyModel");

// Create a new property
exports.createProperty = async (req, res) => {
  try {
    // console.log("Received Data:", req.body); 
    // console.log("User ID:", req.user?.id);   
    const { title, description, price, address, city, state, zipCode, country, images, propertyType, bedrooms, bathrooms, area } = req.body;

    if (!title || !description || !price || !address || !city || !state || !zipCode || !country || !propertyType) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const newProperty = new Property({
      title,
      description,
      price,
      address,
      city,
      state,
      zipCode,
      country,
      images,
      propertyType,
      bedrooms,
      bathrooms,
      area,
      createdBy: req.user.id,
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    console.error("Error creating property:", error); // Log error details
    res.status(500).json({ message: error.message });
  }
};

exports.getMyProperties = async (req, res) => {
  try {
    const userId = req.user.id;

    const properties = await Property.find({ createdBy: userId });
    
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 async (req, res) => {
  try {
    const { title, description, price, address, city, state, zipCode, country, images, propertyType, bedrooms, bathrooms, area } = req.body;

    const newProperty = new Property({
      title,
      description,
      price,
      address,
      city,
      state,
      zipCode,
      country,
      images,
      propertyType,
      bedrooms,
      bathrooms,
      area,
      createdBy: req.user.id, // Extracted from authenticated user
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update an existing property by ID
exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProperty = await Property.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOnePropertyDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a property by ID
exports.deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
