const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/AdminModel');

const router = express.Router();

// Admin Signup (Register)
const registerAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newAdmin = new Admin({ email, password: hashedPassword });
  
      await newAdmin.save();
  
      res.status(201).json({ message: "Admin registered successfully!" });
    } catch (error) {
      console.error("Error registering admin:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

// Admin Login
const adminLogin = ( async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ error: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ adminId: admin._id }, 'secretKey', { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = { registerAdmin ,adminLogin}