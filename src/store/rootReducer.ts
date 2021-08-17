import { combineReducers } from '@reduxjs/toolkit'
import movieReducer from './reducers/MovieReducer'

export default combineReducers({
  movie: movieReducer,
})
