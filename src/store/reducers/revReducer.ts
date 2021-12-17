import {
  IRevmoviesState,
  reviewmoviesActionTypes,
  RewActionsTypes,
} from "../types/types";

const initList =
  localStorage.getItem("listrev") === null
    ? false
    : localStorage.getItem("listrev");

const initial: IRevmoviesState = {
  revmovies: [],
  loading: false,
  error: null,
  listrev: initList,
};

export const revReducer = (state = initial, action: RewActionsTypes) => {
  switch (action.type) {
    case reviewmoviesActionTypes.FETCH_REVENUE_MOVIE:
      return { ...state, loading: true };

    case reviewmoviesActionTypes.FETCH_REVENUE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        revmovies: action.payload,
      };

    case reviewmoviesActionTypes.FETCH_REVENUE_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case reviewmoviesActionTypes.SWITCH_VIEW_REV:
      localStorage.setItem("listrev", !state.listrev + "");
      return { ...state, listrev: !state.listrev };

    default:
      return state;
  }
};
