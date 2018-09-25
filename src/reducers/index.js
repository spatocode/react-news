import { ON_OVER, ON_OUT } from '../actions'

const initialState = {
    fullNav: false
}

function navReducer(state = initialState, action){
    switch(action.type){
        case ON_OVER:
            return { fullNav: action.payload }
        case ON_OUT:
            return { fullNav: action.payload }
        default:
            return state
    }
}

export default navReducer