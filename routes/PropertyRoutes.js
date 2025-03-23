const express = require("express");
const multer = require("multer");   
const { createProperty, updateProperty, getAllProperties, deleteProperty, getOnePropertyDetail, getMyProperties } = require("../controllers/PropertyController");
const router = express.Router();
const authMiddleware = require("../middlewares/AuthMiddleware");
const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post("/property/create", authMiddleware, upload.array("images", 5), createProperty);
router.put("/property/update/:id",updateProperty);
router.get("/property/getmyproperties",authMiddleware ,getMyProperties);
router.get("/property/getallproperties",getAllProperties);
router.get("/property/getone/:id",getOnePropertyDetail);
router.delete("/property/deleteproperty/:id",deleteProperty);

module.exports = router;