const express = require('express');
const { addReview, getReviewsByMovie } = require('../controllers/reviewController');
const router = express.Router();

router.post('/reviews', addReview);
router.get('/reviews/:movieId', getReviewsByMovie);

module.exports = router;
