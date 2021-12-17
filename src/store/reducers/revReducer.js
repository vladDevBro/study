import {
  FETCH_REVENUE_MOVIE,
  FETCH_REVENUE_MOVIE_FAILURE,
  FETCH_REVENUE_MOVIE_SUCCESS,
  SWITCH_VIEW_REV,
} from "../types/types";

const initList =
  localStorage.getItem("listrev") === null
    ? false
    : localStorage.getItem("listrev");

const initial = {
  revmovies: [],
  loading: false,
  error: null,
  listrev: initList,
};

export const revReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_REVENUE_MOVIE:
      return { ...state, loading: true };

    case FETCH_REVENUE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        revmovies: action.payload,
      };

    case FETCH_REVENUE_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case SWITCH_VIEW_REV:
      localStorage.setItem("listrev", !state.listrev);
      return { ...state, listrev: !state.listrev };

    default:
      return state;
  }
};
