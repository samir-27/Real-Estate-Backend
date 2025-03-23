const Review = require('../models/ReviewModel');

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { stars, description, userId, userType } = req.body;

    // Validate userType
    if (!['Buyer', 'Seller'].includes(userType)) {
      return res.status(400).json({ error: "Invalid userType. Must be 'Buyer' or 'Seller'." });
    }

    const newReview = new Review({
      stars,
      description,
      userId,
      userType
    });

    await newReview.save();
    res.status(201).json({ message: 'Review created successfully!', review: newReview });

  } catch (error) {
    res.status(500).json({ error: 'Error creating review', details: error.message });
  }
};


exports.getAllReviews = async (req, res) => {
    try {
      const reviews = await Review.find().populate('userId');
      res.status(200).json({ reviews });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching reviews', details: error.message });
    }
  };
  