import { MovieItem, MovieListItem } from '../../types/MovieTypes'

export namespace ReduxStateTypes {
  export type MovieState = {
    searchedTerm: string
    isFetching: boolean
    movies: MovieListItem[]
    movieDetail: MovieItem | null
    page: number
    total: number
  }

  export type DefaultState = {
    movie: MovieState
  }
}

export namespace ReduxInitialStates {
  export const movie: ReduxStateTypes.MovieState = {
    searchedTerm: '',
    isFetching: false,
    movies: [],
    movieDetail: null,
    page: 1,
    total: 1,
  }
}
