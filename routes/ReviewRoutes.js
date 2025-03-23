const express = require('express');
const { createReview, getAllReviews } = require('../controllers/ReviewController');

const router = express.Router();

router.post('/review/create', createReview);
router.get('/review/all', getAllReviews);

module.exports = router;
