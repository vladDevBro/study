import { UserApi } from "../../api/api";
import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_FAILURE,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_REVENUE_MOVIE,
  FETCH_REVENUE_MOVIE_FAILURE,
  FETCH_REVENUE_MOVIE_SUCCESS,
} from "../types/types";

const fetchMoviesAC = () => {
  return { type: FETCH_POPULAR_MOVIES };
};
const fetchMoviesSuccessAC = (payload) => {
  return { type: FETCH_POPULAR_MOVIES_SUCCESS, payload };
};
const fetchMoviesErrorAC = () => {
  return { type: FETCH_POPULAR_MOVIES_FAILURE, payload: "Error" };
};

const fetchRevMoviesAC = () => {
  return { type: FETCH_REVENUE_MOVIE };
};
const fetchRevMoviesSuccessAC = (payload) => {
  return { type: FETCH_REVENUE_MOVIE_SUCCESS, payload };
};
const fetchRevMoviesErrorAC = () => {
  return { type: FETCH_REVENUE_MOVIE_FAILURE, payload: "Error" };
};

export const fetchPopMovies = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchMoviesAC());
      const response = await UserApi.getSortPopularityMovies();
      dispatch(fetchMoviesSuccessAC(response.results));
    } catch (error) {
      fetchMoviesErrorAC();
    }
  };
};

export const fetchRevMovies = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRevMoviesAC());
      const response = await UserApi.getSortRevenueMoviesProfile();
      setTimeout(
        () => {
          dispatch(fetchRevMoviesSuccessAC(response.results));
        },

        1000
      );
    } catch (error) {
      fetchRevMoviesErrorAC();
    }
  };
};
