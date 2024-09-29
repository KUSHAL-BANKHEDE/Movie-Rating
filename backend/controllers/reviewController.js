const Review = require('../models/review');
const Movie = require('../models/movie');

const addReview = async (req, res) => {
    const { movieId, reviewerName, rating, reviewComments } = req.body;
    const newReview = new Review({ movieId, reviewerName, rating, reviewComments });
    await newReview.save();

    // Update the movie's average rating
    const reviews = await Review.find({ movieId });
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    await Movie.findByIdAndUpdate(movieId, { averageRating });

    res.status(201).json(newReview);
};

const getReviewsByMovie = async (req, res) => {
    const { movieId } = req.params;
    const reviews = await Review.find({ movieId });
    res.json(reviews);
};

module.exports = { addReview, getReviewsByMovie };
