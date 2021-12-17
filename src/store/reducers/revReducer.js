import {
  FETCH_REVENUE_MOVIE,
  FETCH_REVENUE_MOVIE_FAILURE,
  FETCH_REVENUE_MOVIE_SUCCESS,
  SWITCH_VIEW_REV,
} from "../types/types";

const initList = localStorage.getItem("list") === null && false;
console.log("file: revReducer.js ~ line 9 ~ initList", initList);

const initial = {
  revmovies: [],
  loading: false,
  error: null,
  list: initList,
};

export const revReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_REVENUE_MOVIE:
      return { loading: true, error: null, revmovies: [], list: false };

    case FETCH_REVENUE_MOVIE_SUCCESS:
      return {
        loading: false,
        error: null,
        revmovies: action.payload,
        list: false,
      };

    case FETCH_REVENUE_MOVIE_FAILURE:
      return {
        loading: false,
        error: action.payload,
        revmovies: [],
        list: false,
      };

    case SWITCH_VIEW_REV:
      localStorage.setItem("list", !state.list);
      return { ...state, list: !state.list };

    default:
      return state;
  }
};
