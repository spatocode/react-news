import C from './constant'

export const onOver = () => ({
    type: C.ON_OVER,
    payload: true
})

export const onOut = () => ({
    type: C.ON_OUT,
    payload: false
})

export const selectNews = (category) => ({
    type: C.SELECT_NEWS,
    category
})

export const requestNews = () => ({
    type: C.REQUEST_NEWS,
    isFetching: true
})

export const receiveNews = (json) => ({
    type: C.RECEIVE_NEWS,
    isFetching: false,
    error: false,
    news: json.articles
})

export const errorReport = () => ({
    type: C.ERROR_REPORT,
    isFetching: false,
    error: true
})

function fetchNews(category){
    return dispatch => {
        dispatch(requestNews())
        return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8fadfc68622547b88f834eb6e89f6324`, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => dispatch(receiveNews(json)))
            .catch(error => {
                dispatch(errorReport())
            })
    }
}

function shouldFetchNews(state){
    const news = state.news.items
    if(state.isFetching || news.length > 0){
        return false
    }
    return true
}

export function fetchNewsIfNeeded(category){
    return (dispatch, getState) => {
        if(shouldFetchNews(getState())) {
            return dispatch(fetchNews(category))
        }
    }
}
