import axios from "axios";

const key = process.env.REACT_APP_TMDB_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${key}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${key}&with_genres=28`,
};

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { instance, requests };
