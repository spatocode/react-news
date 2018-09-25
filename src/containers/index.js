import { connect } from 'react-redux'
import DisplayMenu from '../components/menu'
import { onOver, onOut } from '../actions'

const mapDispatchToProps = dispatch => ({
    show: () => { dispatch(onOver()) },
    hide: () => { dispatch(onOut()) }
})

const mapStateToProps = state => ({
    fullMenu: state.nav.fullNav ? {width: '130px'} : {width: '20px'}
})

export const Menu = connect(mapStateToProps, mapDispatchToProps)(DisplayMenu)