const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Buyer = require("../models/BuyerModel");
const Seller = require("../models/SellerModel");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// **Signup Controller**
exports.signup = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let userModel = role === "buyer" ? Buyer : Seller;
    let existingUser = await userModel.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// **Login Controller**
exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let userModel = role === "buyer" ? Buyer : Seller;
    let user = await userModel.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Login Error:", error);  // Log error to debug
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

