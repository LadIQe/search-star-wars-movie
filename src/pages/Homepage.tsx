import MovieList from '../components/homepage/MovieList'
import MovieListInput from '../components/homepage/MovieListInput'
import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit'
import { actionClearMovies } from '../store/actions/Actions'
import { RouteComponentProps } from 'react-router-dom'

type DispatchProps = {
  clearMovies: typeof actionClearMovies
}
type Props = DispatchProps

const Homepage: FC<Props> = ({ clearMovies }) => {
  useEffect(() => {
    return () => {
      clearMovies()
    }
  })

  return (
    <div className="homepage">
      <h1>Find your movie</h1>

      <div className="input-wrapper">
        <MovieListInput />
      </div>

      <div className="list-wrapper">
        <MovieList />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  clearMovies: bindActionCreators(actionClearMovies, dispatch),
})

export default connect<{}, DispatchProps, RouteComponentProps, {}>(null, mapDispatchToProps)(Homepage)
