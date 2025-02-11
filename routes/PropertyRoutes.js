const express = require("express");
const { createProperty, updateProperty, getAllProperties, deleteProperty } = require("../controllers/PropertyController");
const router = express.Router();

router.post("/property/create",createProperty);
router.post("/property/update",updateProperty);
router.get("/property/getallproperties",getAllProperties);
router.delete("/property/deleteproperty",deleteProperty)

module.exports = router;