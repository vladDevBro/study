import axios from "axios";
import { KEY } from "../config/constants";

// const KEY = process.env.API_KEY;

const iniMovieApi = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export const UserApi = {
  getSortPopularityMovies: (page = 1) => {
    return iniMovieApi(
      `discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
      return response.data;
    });
  },
  getSortRevenueMoviesProfile: (page = 1) => {
    return iniMovieApi(
      `discover/movie?api_key=${KEY}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
      return response.data;
    });
  },
};
