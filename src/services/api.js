import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_URL = '/trending/movie/day?language=en-US';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmRmMTdhMjZiZDI1ZmZhMjlmN2RkNzc1ODZmMDYzYSIsIm5iZiI6MTcxMjAxMjE3OC4zNDIwMDAyLCJzdWIiOiI2NjBiM2I5MmUwMzlmMTAxN2NlNTU0NjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jbCqaz1A9anLPdTmdhpjEbxaJ6pdLJcqK7L3gDlxBwY';

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};
export async function getTrendMovies() {
  const { data } = await axios.get(`${BASE_URL}${TRENDING_URL}`, options);
  console.log(data.results);
  return data.results;
}

export async function getMovieById(movieId) {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options);
  return data;
}

export async function fetchMovieCast(movieId) {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  return data.cast;
}

export async function fetchMovieReviews(movieId) {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return data.results;
}

export async function fetchMoviePage(query) {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query, language: 'en-US' },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
}
