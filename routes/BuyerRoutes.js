const express = require("express");
const router = express.Router();
const { getBuyerById, updateBuyer, deleteBuyer, updatePassword, getAllBuyers } = require("../controllers/BuyerController");

router.get("/buyers",getAllBuyers);
router.get("/buyer/:id", getBuyerById);
router.put("/buyer/:id", updateBuyer);
router.put("/buyer/updatepassword/:id", updatePassword);
router.delete("/buyer/:id", deleteBuyer);

module.exports = router;
