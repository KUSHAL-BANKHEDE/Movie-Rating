import React, { useState, useEffect  } from 'react';
import MovieList from './components/MovieList';
import AddMovieModal from './components/AddMovieModal';
import { getMovies, addMovie } from './services/api';

function App() {
  const [movies, setMovies] = useState([]); // State to store movie list
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);

  // Fetch movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  // Handle adding a new movie
  const handleAddMovie = async (movieData) => {
    try {
      const newMovie = await addMovie(movieData); // Add movie through API
      setMovies([...movies, newMovie]); // Update state to include new movie
      console.log('Movie added successfully!');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Movie Review Platform</h1>
        <button
          onClick={() => setShowAddMovieModal(true)}
          className="bg-purple-500 text-white py-2 px-4 rounded-lg"
        >
          Add new movie
        </button>
      </div>

      

      {/* Render the list of movies */}
      <MovieList movies={movies} />

      {/* Modal for adding new movie */}
      <AddMovieModal
        isOpen={showAddMovieModal}
        onClose={() => setShowAddMovieModal(false)}
        onSubmit={handleAddMovie}
      />
    </div>
  );
}

export default App;