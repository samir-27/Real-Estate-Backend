const Seller = require("../models/SellerModel");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Get Seller by ID
const getSellerById = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) return res.status(404).json({ message: "Seller not found" });

    res.status(200).json(seller);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update Seller
const updateSeller = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Seller id", id);
    const updatedSeller = await Seller.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updatedSeller);
    if (!updatedSeller) {
      return res.status(404).json({ message: "Seller not found" });
    }
    res.status(200).json(updatedSeller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Seller Password
const SellerUpdatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    const seller = await Seller.findById(id); // Fixed variable name
    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, seller.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    const salt = await bcrypt.genSalt(10);
    seller.password = await bcrypt.hash(newPassword, salt);
    await seller.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Seller
const deleteSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id); // Fixed variable name
    if (!seller) return res.status(404).json({ message: "Seller not found" });

    res.status(200).json({ message: "Seller deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { getSellerById, updateSeller, SellerUpdatePassword, deleteSeller };
