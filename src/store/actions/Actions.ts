import { ActionTypeEnum, AllActions } from './ActionTypes'
import { MovieItem, MovieListItem } from '../../types/MovieTypes'

export const actionFetchMovies = (search: string, page: number): AllActions.FetchMovies => ({
  type: ActionTypeEnum.FETCH_MOVIES,
  payload: {
    search,
    page,
  },
})

export const actionFetchMoviesSuccess = (
  searchedTerm: string,
  movies: MovieListItem[],
  total: number,
  page: number,
): AllActions.FetchMoviesSuccess => ({
  type: ActionTypeEnum.FETCH_MOVIES_SUCCESS,
  payload: {
    searchedTerm,
    data: movies,
    total,
    page,
  },
})

export const actionFetchMoviesFailed = (): AllActions.FetchMoviesFailed => ({
  type: ActionTypeEnum.FETCH_MOVIES_FAILED,
})

export const actionFetchMovieDetail = (id: string): AllActions.FetchMovieDetail => ({
  type: ActionTypeEnum.FETCH_MOVE_DETAIL,
  payload: id,
})

export const actionFetchMovieDetailSuccess = (movie: MovieItem): AllActions.FetchMovieDetailSuccess => ({
  type: ActionTypeEnum.FETCH_MOVE_DETAIL_SUCCESS,
  payload: movie,
})

export const actionFetchMovieDetailFailed = (): AllActions.FetchMovieDetailFailed => ({
  type: ActionTypeEnum.FETCH_MOVE_DETAIL_FAILED,
})

export const actionClearMovies = (): AllActions.ClearMovies => ({
  type: ActionTypeEnum.CLEAR_MOVIES,
})
