const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    reviewerName: { type: String, default: 'Anonymous' },
    rating: { type: Number, required: true },
    reviewComments: { type: String }
});

module.exports = mongoose.model('Review', reviewSchema);
