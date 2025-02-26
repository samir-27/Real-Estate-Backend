const express = require("express");
const router = express.Router();
// const { getBuyerById, updateBuyer, deleteBuyer, updatePassword } = require("../controllers/BuyerController");
const { updateSeller, getSellerById,SellerUpdatePassword } = require("../controllers/SellerController");

router.get("/seller/:id", getSellerById);
router.put("/seller/:id", updateSeller);
router.put("/seller/updatepassword/:id", SellerUpdatePassword);
// router.delete("/buyer/:id", deleteBuyer);

module.exports = router;
