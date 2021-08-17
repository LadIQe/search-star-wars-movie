import { FAVOURITES_KEY } from '../constants/Storage'
import { MovieItem } from '../types/MovieTypes'

export const addMovieToStorage = (item: MovieItem) => {
  const favourites = loadMoviesFromStorage()
  favourites.push(item)

  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites))
}

export const removeMovieFromStorage = (id: string) => {
  const favourites = loadMoviesFromStorage()
  const newFavourites = favourites.filter((item) => item.imdbID !== id)

  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(newFavourites))
}

export const loadMoviesFromStorage = (): MovieItem[] => JSON.parse(localStorage.getItem(FAVOURITES_KEY) || '[]')
