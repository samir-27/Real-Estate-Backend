const Buyer = require("../models/BuyerModel");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Get all Buyers
const getAllBuyers = async (req, res) => {
  try {
    const buyers = await Buyer.find();
    res.status(200).json(buyers);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get Buyer by ID
const getBuyerById = async (req, res) => {
  try {
    const buyer = await Buyer.findById(req.params.id);
    if (!buyer) return res.status(404).json({ message: "Buyer not found" });

    res.status(200).json(buyer);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update Buyer
const updateBuyer = async (req, res) => {

    try {
      console.log(req.body);
        const { id } = req.params;
        const updatedBuyer = await Buyer.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!updatedBuyer) {
          return res.status(404).json({ message: "Buyer not found" });
        }
        res.status(200).json(updatedBuyer);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updatePassword = async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    const buyer = await Buyer.findById(id);
    if (!buyer) {
      return res.status(404).json({ message: "Buyer not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, buyer.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    const salt = await bcrypt.genSalt(10);
    buyer.password = await bcrypt.hash(newPassword, salt);
    await buyer.save();

    res.status(200).json({ message: "Password updated successfully" });
  }catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: error.message });
  }
  
};

// Delete Buyer
const deleteBuyer = async (req, res) => {
  try {
    const buyer = await Buyer.findByIdAndDelete(req.params.id);
    if (!buyer) return res.status(404).json({ message: "Buyer not found" });

    res.status(200).json({ message: "Buyer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { getAllBuyers, getBuyerById, updateBuyer, updatePassword, deleteBuyer };
