import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import { getMovies, deleteMovie, updateMovie } from '../services/api';

const MovieList = ({ openAddMovie, openAddReview }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getMovies();
    setMovies(data);
  };

  const handleDelete = async (id) => {
    await deleteMovie(id);
    fetchMovies(); // Refresh movie list
  };


  const handleEdit = async (id, movie) => {
    await updateMovie(id, movie);
    fetchMovies(); // Refresh movie list
  };
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} handleEdit={handleEdit} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
