import MovieSaga from './sagas/MovieSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([...MovieSaga])
}
