import { createStore, combineReducers } from 'redux'
import navReducer from '../reducers'

export const store = createStore(combineReducers({
    nav: navReducer
}))