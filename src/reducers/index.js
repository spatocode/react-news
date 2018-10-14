
import C from '../actions/constant'

const initialState = {
    isFetching: false,
    didInvalidate: false,
    items: []
}

export function navReducer(state = {fullNav: false}, action){
    switch(action.type){
        case C.ON_OVER:
            return { fullNav: action.payload }
        case C.ON_OUT:
            return { fullNav: action.payload }
        default:
            return state
    }
}

export function news(state = initialState, action){
    switch(action.type){
        case C.REQUEST_NEWS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case C.RECEIVE_NEWS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.news
            })
        default:
            return state
    }
}