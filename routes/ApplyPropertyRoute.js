const express = require("express");
const { applyProperty } = require("../controllers/ApplyPropertyController");
const router = express.Router();
router.post("/property/apply", applyProperty);
module.exports = router;