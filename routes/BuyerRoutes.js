const express = require("express");
const router = express.Router();
const { getBuyerById, updateBuyer, deleteBuyer } = require("../controllers/BuyerController");

router.get("/buyer/:id", getBuyerById);
router.put("/buyer/:id", updateBuyer);
router.delete("/buyer/:id", deleteBuyer);

module.exports = router;
