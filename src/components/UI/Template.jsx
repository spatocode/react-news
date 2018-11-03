import React from 'react'
import { connect } from 'react-redux'
import { Menu, Title } from '../containers'
import Error from './Error'
import Footer from './Footer'

const Template = ({ children, error}) =>
    <div className="news">
        <Title/>
        { error ? <Error /> : null }
        <Menu/>
        {children}
        <Footer/>
    </div>

const mapStateToProps = (state) => ({
    error: state.news.error
  })

export default connect(mapStateToProps)(Template)