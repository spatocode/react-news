import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { navReducer, news } from '../reducers'

const logger = createLogger()

export const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] =   JSON.stringify(store.getState())
    return result
}

const storeFactory = (preloadedState) =>
    createStore(
        combineReducers({navReducer, news}),
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )

export default storeFactory