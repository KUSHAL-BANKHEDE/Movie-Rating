const express = require('express');
const { createMovie, getMovies, deleteMovie } = require('../controllers/movieController');
const router = express.Router();

router.post('/movies', createMovie);
router.get('/movies', getMovies);
router.delete('/movies/:id', deleteMovie);

module.exports = router;
