import React, { useEffect, useState } from 'react'
import BaseList from '../components/common/BaseList'
import MovieListPagination from '../components/homepage/MovieListPagination'
import { MovieItem } from '../types/MovieTypes'
import { loadMoviesFromStorage } from '../utils/LocalStorageUtils'

const Favourites = () => {
  const [movies, setMovies] = useState<MovieItem[]>([])
  const [pagination, setPagination] = useState<{ page: number; total: number }>({ page: 1, total: 1 })

  useEffect(() => {
    const favourites = loadMoviesFromStorage()

    setMovies(favourites)
    setPagination({ page: 1, total: favourites.length })
  }, [])

  const handleOnChange = (newPage: number) => {
    setPagination((prevState) => ({ ...prevState, page: newPage }))
  }

  return (
    <div className="homepage">
      <h1>Yourt favourite movies</h1>

      <div className="list-wrapper">
        <BaseList data={movies.slice((pagination.page - 1) * 10, pagination.page * 10)} />
      </div>

      <div className="pagination">
        <MovieListPagination page={pagination.page} total={pagination.total} onChange={handleOnChange} />
      </div>
    </div>
  )
}

export default Favourites
