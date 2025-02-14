const express = require("express");
const { createProperty, updateProperty, getAllProperties, deleteProperty, getOnePropertyDetail } = require("../controllers/PropertyController");
const router = express.Router();
const authMiddleware = require("../middlewares/AuthMiddleware");

router.post("/property/create", authMiddleware, createProperty);
router.put("/property/update/:id",updateProperty);
router.get("/property/getallproperties",getAllProperties);
router.get("/property/getone/:id",getOnePropertyDetail);
router.delete("/property/deleteproperty",deleteProperty);

module.exports = router;