import { connect } from 'react-redux'
import Menu_UI from './UI/menu'
import Home_UI from './UI/home'
import Technology_UI from './UI/Technology'
import Science_UI from './UI/Science'
import Politics_UI from './UI/Politics'
import Business_UI from './UI/Business'
import Sports_UI from './UI/Sports'
import { onOver, onOut, selectNews } from '../actions'

export const Menu = connect(
    state => ({
        fullMenu: state.navReducer.fullNav ? {width: '130px'} : {width: '20px'}
    }), 
    dispatch => ({
        show: () => { dispatch(onOver()) },
        hide: () => { dispatch(onOut()) }
    })
)(Menu_UI)

export const Home = connect(
    state => ({
        news: state.news.items
    }), 
    dispatch => ({
        homeNews: (category) => dispatch(selectNews(category))
    })
)(Home_UI)

export const Science = connect(
    state => ({
        news: state.news.items
    }), 
    dispatch => ({
        scienceNews: (category) => dispatch(selectNews(category))
    })
)(Science_UI)

export const Technology = connect(
    state => ({
        news: state.news.items
    }), 
    dispatch => ({
        techNews: (category) => dispatch(selectNews(category))
    })
)(Technology_UI)

export const Politics = connect(
    state => ({
        news: state.news.items
    }), 
    dispatch => ({
        politicsNews: (category) => dispatch(selectNews(category))
    })
)(Politics_UI)

export const Business = connect(
    state => ({
        news: state.news.items
    }), 
    dispatch => ({
        businessNews: (category) => dispatch(selectNews(category))
    })
)(Business_UI)

export const Sports = connect(
    state => ({
        news: state.news.items
    }), 
    dispatch => ({
        sportsNews: (category) => dispatch(selectNews(category))
    })
)(Sports_UI)