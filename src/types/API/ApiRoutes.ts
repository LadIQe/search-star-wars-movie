import { ResponseTypeMovies } from './ResponseTypes'

export namespace ApiRouteTypesMovies {
  export type GetMovies = {
    url: ''
    response: ResponseTypeMovies.GetMovies
  }

  export type GetMovieDetail = {
    url: ''
    response: ResponseTypeMovies.GetMovieDetail
  }
}

export type ApiGetType = ApiRouteTypesMovies.GetMovies | ApiRouteTypesMovies.GetMovieDetail
export type ApiPostType = {}
export type ApiPutType = {}
export type ApiPatchType = {}
export type ApiDeleteType = {}
