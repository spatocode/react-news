import { connect } from 'react-redux'
import DisplayMenu from '../components/menu'
import DisplayHome from '../components/home'
import { onOver, onOut } from '../actions'

export const Menu = connect(
    state => ({
        fullMenu: state.nav.fullNav ? {width: '130px'} : {width: '20px'}
    }), 
    dispatch => ({
        show: () => { dispatch(onOver()) },
        hide: () => { dispatch(onOut()) }
    })
)(DisplayMenu)

export const Home = connect(
    state => ({
        
    }), 
    dispatch => ({
        
    })
)(DisplayHome)