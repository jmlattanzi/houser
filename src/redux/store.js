import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'
import ar from './asyncReducer'

const combined = combineReducers({
    reducer,
    ar,
})

const middlewares = applyMiddleware(promiseMiddleware())

export default createStore(combined, middlewares)
