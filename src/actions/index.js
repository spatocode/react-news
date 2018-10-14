import C from './constant'

export const onOver = () => ({
    type: C.ON_OVER,
    payload: true
})

export const onOut = () => ({
    type: C.ON_OUT,
    payload: false
})

export const requestNews = () => ({
    type: C.REQUEST_NEWS
})

export const receiveNews = (json) => ({
    type: C.RECEIVE_NEWS,
    news: json.articles
})

function fetchNews(){
    return dispatch => {
        dispatch(requestNews())
        return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8fadfc68622547b88f834eb6e89f6324')
            .then(response => response.json())
            .then(json => dispatch(receiveNews(json)))
    }
}

function shouldFetchNews(state){
    const news = state.news.items
    if(news.length === 0){
        return true
    }
    else if(news.isFetching){
        return false
    }
    else{
        return news.inValidate
    }
}

export function fetchNewsIfNeeded(){
    return (dispatch, getState) => {
        if(shouldFetchNews(getState())) {
            return dispatch(fetchNews())
        }
    }
}