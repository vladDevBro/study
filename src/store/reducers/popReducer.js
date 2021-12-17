import {
  FETCH_POPULAR_MOVIES,
  FETCH_POPULAR_MOVIES_FAILURE,
  FETCH_POPULAR_MOVIES_SUCCESS,
  SWITCH_VIEW_POP,
} from "../types/types";

const initList =
  localStorage.getItem("listpop") === null
    ? false
    : localStorage.getItem("listpop");

const initial = {
  popmovies: [],
  loading: false,
  error: null,
  listpop: initList,
};

export const popReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return { ...state, loading: true };

    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        popmovies: action.payload,
      };

    case FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case SWITCH_VIEW_POP:
      localStorage.setItem("listpop", !state.listpop);

      return { ...state, listpop: !state.listpop };

    default:
      return state;
  }
};
