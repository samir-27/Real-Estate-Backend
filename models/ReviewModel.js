const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  stars: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  description: {
    type: String,
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    refPath: 'userType' // Dynamic reference
  },
  userType: { 
    type: String, 
    required: true, 
    enum: ['Buyer', 'Seller']
  }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
