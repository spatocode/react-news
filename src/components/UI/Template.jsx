import React from 'react'
import { Menu, Title } from '../containers'
import Footer from './Footer'

const Template = ({children}) =>
    <div className="news">
        <Title/>
        <Menu/>
        {children}
        <Footer/>
    </div>

export default Template