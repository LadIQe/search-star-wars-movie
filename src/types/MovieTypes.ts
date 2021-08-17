export type MovieListItem = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export type MovieItem = {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Released: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
}
