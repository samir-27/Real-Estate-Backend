const express = require("express");
const { signup, login } = require("../controllers/AuthController");
const router = express.Router();

router.post("/auth/signup",signup);
router.post("/auth/login",login);

module.exports = router;