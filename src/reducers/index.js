import C from '../actions/constant'

const initialState = {
    isFetching: false,
    error: false,
    items: []
}

export function nav(state = {fullNav: false}, action){
    switch(action.type){
        case C.ON_OVER:
            return Object.assign({}, state, {
                fullNav: action.payload
            })
        case C.ON_OUT:
            return Object.assign({}, state, {
                fullNav: action.payload
            })
        default:
            return state
    }
}

export function selectNews(state={category: "general"}, action) {
    switch(action.type){
        case C.SELECT_NEWS:
            return Object.assign({}, state, {
                category: action.category
            })
        default:
            return state
    }
}

export function news(state = initialState, action) {
    switch(action.type){
        case C.REQUEST_NEWS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
            })
        case C.RECEIVE_NEWS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error,
                items: action.news
            })
        case C.ERROR_REPORT: 
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error
            })
        default:
            return state
    }
}