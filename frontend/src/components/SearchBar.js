import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      className="w-full md:w-1/2 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Search for your favourite movie"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
