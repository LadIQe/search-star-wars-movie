import { ApiRouteTypesMovies } from '../../types/API/ApiRoutes'
import { getApiKey } from '../../utils/ServiceUtils'
import { middlewareAPIClient } from './ApiClient'

export const getMovies = (search: string, page: number) =>
  middlewareAPIClient().get<ApiRouteTypesMovies.GetMovies>('', `?apikey=${getApiKey()}&s=${search}&page=${page}`)

export const getMovieDetail = (id: string) =>
  middlewareAPIClient().get<ApiRouteTypesMovies.GetMovieDetail>('', `?apikey=${getApiKey()}&i=${id}&plot=full`)
