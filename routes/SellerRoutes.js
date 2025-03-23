const express = require("express");
const router = express.Router();
// const { getBuyerById, updateBuyer, deleteBuyer, updatePassword } = require("../controllers/BuyerController");
const { updateSeller, getSellerById,SellerUpdatePassword, getAllSellers, deleteSeller } = require("../controllers/SellerController");
const { deleteBuyer } = require("../controllers/BuyerController");

router.get("/sellers", getAllSellers)
router.get("/seller/:id", getSellerById);
router.put("/seller/:id", updateSeller);
router.put("/seller/updatepassword/:id", SellerUpdatePassword);
router.delete("/seller/:id", deleteSeller);

module.exports = router;
