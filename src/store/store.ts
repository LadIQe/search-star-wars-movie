import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export default function config() {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  })

  sagaMiddleware.run(rootSaga)

  return store
}
