import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const middleware = [
  promiseMiddleware(),
  thunkMiddleware,
]

let composeEnhancers = compose

const windowGlobal: any = typeof window !== 'undefined' && window

if (process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
} else {
  middleware.push(createLogger())
}

const initialState = {}
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(reduxCreateStore)
const createStore = () => createStoreWithMiddleware(combineReducers(reducers), initialState)

export default createStore
