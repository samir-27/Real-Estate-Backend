const express = require("express");
const { createProperty, updateProperty, getAllProperties, deleteProperty, getOnePropertyDetail } = require("../controllers/PropertyController");
const router = express.Router();

router.post("/property/create",createProperty);
router.put("/property/update/:id",updateProperty);
router.get("/property/getallproperties",getAllProperties);
router.get("/property/getone/:id",getOnePropertyDetail);
router.delete("/property/deleteproperty",deleteProperty);

module.exports = router;