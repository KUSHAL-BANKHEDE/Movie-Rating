import React from 'react';

const MovieCard = ({ movie, handleEdit, handleDelete }) => {
  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">{movie.name}</h2>
      <p className="text-gray-600">Released: {movie.releaseDate}</p>
      <p className="font-bold mt-2">Rating: {movie.avgRating}/10</p>
      <div className="flex justify-between items-center mt-4">
        <button onClick={() => handleEdit(movie)} className="text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h.01M4 6h16M4 18h16M8 12h8m-8 6h8m-8-12h8"/></svg>
        </button>
        <button onClick={() => handleDelete(movie._id)} className="text-red-500 hover:text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
