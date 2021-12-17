import { IState, PopActionsTypes, popmoviesActionTypes } from "../types/types";

const initList =
  localStorage.getItem("listpop") === null
    ? "false"
    : localStorage.getItem("listpop");

const initial: IState = {
  popmovies: [],
  loading: false,
  error: null,
  listpop: initList,
};

export const popReducer = (
  state = initial,
  action: PopActionsTypes
): IState => {
  switch (action.type) {
    case popmoviesActionTypes.FETCH_POPULAR_MOVIES:
      return { ...state, loading: true };

    case popmoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        popmovies: action.payload,
      };

    case popmoviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case popmoviesActionTypes.SWITCH_VIEW_POP:
      localStorage.setItem("listpop", !state.listpop + "");

      return { ...state, listpop: !state.listpop };

    default:
      return state;
  }
};
