const express = require("express");
const { applyProperty, getApplications } = require("../controllers/ApplyPropertyController");
const router = express.Router();

router.post("/property/apply", applyProperty);
router.get("/property/getapplication/:propertyID", getApplications)

module.exports = router;