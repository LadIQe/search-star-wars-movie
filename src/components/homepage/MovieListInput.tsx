import { bindActionCreators, Dispatch } from '@reduxjs/toolkit'
import { Input } from 'antd'
import React, { FC } from 'react'
import { connect } from 'react-redux'
import { actionFetchMovies } from '../../store/actions/Actions'
import { ReduxStateTypes } from '../../store/reducers/States'

type StateProps = {
  page: number
}
type DispatchProps = {
  fetchMovies: typeof actionFetchMovies
}
type Props = StateProps & DispatchProps

const MovieListInput: FC<Props> = ({ fetchMovies, page }) => {
  const handleOnSearch = (searchString: string) => fetchMovies(searchString, page)

  return <Input.Search id="search-input" placeholder="Movie name" size="large" onSearch={(value) => handleOnSearch(value)} />
}

const mapStateToProps = (state: ReduxStateTypes.DefaultState): StateProps => ({
  page: state.movie.page,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchMovies: bindActionCreators(actionFetchMovies, dispatch),
})

export default connect<StateProps, DispatchProps, {}, ReduxStateTypes.DefaultState>(mapStateToProps, mapDispatchToProps)(MovieListInput)
