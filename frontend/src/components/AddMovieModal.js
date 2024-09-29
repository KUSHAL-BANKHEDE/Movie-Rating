import React, { useState } from 'react';

const AddMovieModal = ({ isOpen, onClose, onSubmit }) => {
  const [movieData, setMovieData] = useState({
    name: '',
    releaseDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(movieData);
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add new movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Name"
              value={movieData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="releaseDate">
              Release date
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Release date"
              value={movieData.releaseDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
            >
              Create movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieModal;
