const express = require("express");
const { adminLogin, registerAdmin } = require("../controllers/AdminController");
const router = express.Router();

router.post("/admin/register",registerAdmin);
router.post("/admin/login",adminLogin)

module.exports = router;