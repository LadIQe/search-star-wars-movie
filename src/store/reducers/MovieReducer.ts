import { ActionTypeEnum, Actions } from '../actions/ActionTypes'
import { ReduxInitialStates, ReduxStateTypes } from './States'

const initialState: ReduxStateTypes.MovieState = {
  ...ReduxInitialStates.movie,
}

const movieReducer = (state = initialState, action: Actions): ReduxStateTypes.MovieState => {
  switch (action.type) {
    case ActionTypeEnum.FETCH_MOVIES:
    case ActionTypeEnum.FETCH_MOVE_DETAIL:
      return {
        ...state,
        isFetching: true,
      }

    case ActionTypeEnum.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchedTerm: action.payload.searchedTerm,
        movies: action.payload.data,
        total: action.payload.total,
        page: action.payload.page,
      }

    case ActionTypeEnum.FETCH_MOVIES_FAILED:
      return {
        ...state,
        isFetching: false,
        searchedTerm: '',
        movies: [],
        page: 1,
        total: 1,
      }

    case ActionTypeEnum.FETCH_MOVE_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieDetail: action.payload,
      }

    case ActionTypeEnum.FETCH_MOVE_DETAIL_FAILED:
      return {
        ...state,
        isFetching: false,
        movieDetail: null,
      }

    case ActionTypeEnum.CLEAR_MOVIES:
      return {
        ...state,
        isFetching: false,
        movies: [],
        movieDetail: null,
        page: 1,
        total: 1,
      }

    default:
      return state
  }
}

export default movieReducer
