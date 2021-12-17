export enum popmoviesActionTypes {
  FETCH_POPULAR_MOVIES = "FETCH_POPULAR_MOVIES_SWAPII",
  FETCH_POPULAR_MOVIES_SUCCESS = "FETCH_POPULAR_MOVIES_SUCCESS_SWAPII",
  FETCH_POPULAR_MOVIES_FAILURE = "FETCH_POPULAR_MOVIES_FAILURE_SWAPII",
  SWITCH_VIEW_POP = "SWITCH_VIEW_LIST_SWAPII",
}

export enum reviewmoviesActionTypes {
  FETCH_REVENUE_MOVIE = "FETCH_REVENUE_MOVIE_SWAPII",
  FETCH_REVENUE_MOVIE_SUCCESS = "FETCH_REVENUE_MOVIE_SUCCESS_SWAPII",
  FETCH_REVENUE_MOVIE_FAILURE = "FETCH_REVENUE_MOVIE_FAILURE_SWAPII",
  SWITCH_VIEW_REV = "SWITCH_VIEW_REV_SWAPII",
}

export interface IFetch {
  type: popmoviesActionTypes.FETCH_POPULAR_MOVIES;
}

export interface IFetchSuccess {
  type: popmoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS;
  payload: IMovie[];
}

export interface IFetchFailure {
  type: popmoviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE;
  payload: string;
}

export interface ISwitch {
  type: popmoviesActionTypes.SWITCH_VIEW_POP;
}

export type PopActionsTypes = IFetch | IFetchSuccess | IFetchFailure | ISwitch;

export interface IFetchRev {
  type: reviewmoviesActionTypes.FETCH_REVENUE_MOVIE;
}

export interface IFetchSuccessRev {
  type: reviewmoviesActionTypes.FETCH_REVENUE_MOVIE_SUCCESS;
  payload: IMovie[];
}

export interface IFetchFailureRev {
  type: reviewmoviesActionTypes.FETCH_REVENUE_MOVIE_FAILURE;
  payload: string;
}

export interface ISwitchRev {
  type: reviewmoviesActionTypes.SWITCH_VIEW_REV;
}

export type RewActionsTypes =
  | IFetchRev
  | IFetchSuccessRev
  | IFetchFailureRev
  | ISwitchRev;

export interface IMovie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  length?: number;
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

export interface IState {
  popmovies: IMovie[];
  loading: boolean;
  error: string | null;
  listpop: string | boolean | null;
}

export interface IRevmoviesState {
  revmovies: IMovie[];
  loading: boolean;
  error: string | null;
  listrev: string | boolean | null;
}
