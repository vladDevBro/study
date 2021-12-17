import { Dispatch } from "redux";
import { AppDispatch } from "..";
import { UserApi } from "../../api/api";
// import { IFetch, PopActionsTypes } from "../reducers/popReducer";
import {
  IFetch,
  IFetchFailure,
  IFetchFailureRev,
  IFetchRev,
  IFetchSuccess,
  IFetchSuccessRev,
  IMovie,
  ISwitch,
  ISwitchRev,
  PopActionsTypes,
  popmoviesActionTypes,
  reviewmoviesActionTypes,
} from "../types/types";

const fetchMoviesAC = (): IFetch => {
  return { type: popmoviesActionTypes.FETCH_POPULAR_MOVIES };
};
const fetchMoviesSuccessAC = (payload: IMovie[]): IFetchSuccess => {
  return { type: popmoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS, payload };
};
const fetchMoviesErrorAC = (): IFetchFailure => {
  return {
    type: popmoviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE,
    payload: "Error",
  };
};

const fetchRevMoviesAC = (): IFetchRev => {
  return { type: reviewmoviesActionTypes.FETCH_REVENUE_MOVIE };
};
const fetchRevMoviesSuccessAC = (payload: IMovie[]): IFetchSuccessRev => {
  return { type: reviewmoviesActionTypes.FETCH_REVENUE_MOVIE_SUCCESS, payload };
};
const fetchRevMoviesErrorAC = (): IFetchFailureRev => {
  return {
    type: reviewmoviesActionTypes.FETCH_REVENUE_MOVIE_FAILURE,
    payload: "Error",
  };
};
export const switchPop = (): ISwitch => {
  return { type: popmoviesActionTypes.SWITCH_VIEW_POP };
};
export const switchlist = (): ISwitchRev => {
  return { type: reviewmoviesActionTypes.SWITCH_VIEW_REV };
};

export const fetchPopMovies = () => {
  return async (dispatch: Dispatch<PopActionsTypes>) => {
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
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchRevMoviesAC());
      const response = await UserApi.getSortRevenueMoviesProfile();
      setTimeout(() => {
        dispatch(fetchRevMoviesSuccessAC(response.results));
      }, 1000);
    } catch (error) {
      fetchRevMoviesErrorAC();
    }
  };
};
