import axios from "axios";

const API_KEY = '83b00b62c3f214acdc61c0e1a41b5e59';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

export async function fetchTrendingMovies() {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  const response = await axios.get('/trending/all/day', { params });
  const data = response.data;

  return data;
}

export async function fetchMovieById(movieId) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  const response = await axios.get(`/movie/${movieId}`, { params });
  const data = response.data;

  return data;
}

export async function fetchMovieByName(movieName) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    query: movieName,
  };

  const response = await axios.get(`/search/movie`, { params });
  const data = response.data;

  return data;
}

export async function fetchCast(movieId) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  const response = await axios.get(`/movie/${movieId}/credits`, { params });
  const data = response.data;

  return data;
}

export async function fetchReviews(movieId) {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };

  const response = await axios.get(`/movie/${movieId}/reviews`, { params });
  const data = response.data;

  return data;
}

// ключ 83b00b62c3f214acdc61c0e1a41b5e59
// https://api.themoviedb.org/3/movie/550?api_key=83b00b62c3f214acdc61c0e1a41b5e59