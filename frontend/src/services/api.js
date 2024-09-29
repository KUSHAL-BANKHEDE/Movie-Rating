const API_URL = 'https://movie-rating-two.vercel.app/api/movies';

// Function to get all movies
export const getMovies = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
};

// Function to add a movie
export const addMovie = async (movie) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};

// Function to update a movie
export const updateMovie = async (id, movie) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};

// Function to delete a movie
export const deleteMovie = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.statusText}`);
  }
};
