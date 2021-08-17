import { MovieItem, MovieListItem } from '../MovieTypes'

export namespace ResponseTypeMovies {
  export type GetMovies = {
    Response: string
    Search: MovieListItem[]
    totalResults: string
  }

  export type GetMovieDetail = MovieItem
}
