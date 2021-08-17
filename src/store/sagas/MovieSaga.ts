import { ActionTypeEnum, AllActions } from '../actions/ActionTypes'
import {
  actionClearMovies,
  actionFetchMovieDetailFailed,
  actionFetchMovieDetailSuccess,
  actionFetchMoviesFailed,
  actionFetchMoviesSuccess,
} from '../actions/Actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getMovieDetail, getMovies } from '../services/MovieService'

import { AxiosResponse } from 'axios'
import { ResponseTypeMovies } from '../../types/API/ResponseTypes'

export function* sagaFetchMovies({ payload }: AllActions.FetchMovies) {
  try {
    if (payload.search) {
      const response: AxiosResponse<ResponseTypeMovies.GetMovies> = yield call(getMovies, payload.search, payload.page)

      yield put(actionFetchMoviesSuccess(payload.search, response.data.Search, Number(response.data.totalResults), payload.page))
    } else {
      yield put(actionClearMovies())
    }
  } catch {
    yield put(actionFetchMoviesFailed())
  }
}

export function* sagaFetchMovieDetail({ payload }: AllActions.FetchMovieDetail) {
  try {
    const response: AxiosResponse<ResponseTypeMovies.GetMovieDetail> = yield call(getMovieDetail, payload)

    yield put(actionFetchMovieDetailSuccess(response.data))
  } catch {
    yield put(actionFetchMovieDetailFailed())
  }
}

export default [takeEvery(ActionTypeEnum.FETCH_MOVIES, sagaFetchMovies), takeEvery(ActionTypeEnum.FETCH_MOVE_DETAIL, sagaFetchMovieDetail)]
