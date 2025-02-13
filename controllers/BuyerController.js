const Buyer = require("../models/BuyerModel");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

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

module.exports = { getBuyerById, updateBuyer, deleteBuyer };
