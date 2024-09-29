import axios from 'axios';

const API_URL = 'https://movie-rating-two.vercel.app/api/movies';

export const getMovies = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addMovie = async (movie) => {
  const res = await axios.post(API_URL, movie);
  return res.data;
};

export const updateMovie = async (id, movie) => {
  const res = await axios.put(`${API_URL}/${id}`, movie);
  return res.data;
};

export const deleteMovie = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
