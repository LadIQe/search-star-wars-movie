import { bindActionCreators, Dispatch } from '@reduxjs/toolkit'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { actionFetchMovies } from '../../store/actions/Actions'
import { ReduxStateTypes } from '../../store/reducers/States'
import BaseList from '../common/BaseList'
import MovieListPagination from './MovieListPagination'

type StateProps = {
  movies: ReduxStateTypes.MovieState['movies']
  isFetching: boolean
  page: number
  total: number
  searchTerm: string
}
type DispatchProps = {
  fetchMovies: typeof actionFetchMovies
}
type Props = StateProps & DispatchProps

const MovieList: FC<Props> = ({ movies, isFetching, page, fetchMovies, total, searchTerm }) => {
  const handleOnChange = (newPage: number) => {
    fetchMovies(searchTerm, newPage)
  }

  return (
    <>
      <BaseList data={movies || []} loading={isFetching} />

      <div className="pagination">
        <MovieListPagination page={page} total={total} onChange={handleOnChange} />
      </div>
    </>
  )
}

const mapStateToProps = (state: ReduxStateTypes.DefaultState): StateProps => ({
  movies: state.movie.movies,
  isFetching: state.movie.isFetching,
  page: state.movie.page,
  total: state.movie.total,
  searchTerm: state.movie.searchedTerm,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchMovies: bindActionCreators(actionFetchMovies, dispatch),
})

export default connect<StateProps, DispatchProps, {}, ReduxStateTypes.DefaultState>(mapStateToProps, mapDispatchToProps)(MovieList)
