import { MovieItem, MovieListItem } from '../../types/MovieTypes'

export enum ActionTypeEnum {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILED = 'FETCH_MOVIES_FAILED',
  FETCH_MOVE_DETAIL = 'FETCH_MOVE_DETAIL',
  FETCH_MOVE_DETAIL_SUCCESS = 'FETCH_MOVE_DETAIL_SUCCESS',
  FETCH_MOVE_DETAIL_FAILED = 'FETCH_MOVE_DETAIL_FAILED',
  CLEAR_MOVIES = 'CLEAR_MOVIES',
}

export namespace AllActions {
  export type FetchMovies = {
    type: ActionTypeEnum.FETCH_MOVIES
    payload: {
      search: string
      page: number
    }
  }
  export type FetchMoviesSuccess = {
    type: ActionTypeEnum.FETCH_MOVIES_SUCCESS
    payload: {
      searchedTerm: string
      data: MovieListItem[]
      total: number
      page: number
    }
  }
  export type FetchMoviesFailed = {
    type: ActionTypeEnum.FETCH_MOVIES_FAILED
  }

  export type FetchMovieDetail = {
    type: ActionTypeEnum.FETCH_MOVE_DETAIL
    payload: string
  }
  export type FetchMovieDetailSuccess = {
    type: ActionTypeEnum.FETCH_MOVE_DETAIL_SUCCESS
    payload: MovieItem
  }
  export type FetchMovieDetailFailed = {
    type: ActionTypeEnum.FETCH_MOVE_DETAIL_FAILED
  }

  export type ClearMovies = {
    type: ActionTypeEnum.CLEAR_MOVIES
  }
}

export type Actions =
  | AllActions.FetchMovies
  | AllActions.FetchMoviesSuccess
  | AllActions.FetchMoviesFailed
  | AllActions.FetchMovieDetail
  | AllActions.FetchMovieDetailSuccess
  | AllActions.FetchMovieDetailFailed
  | AllActions.ClearMovies
