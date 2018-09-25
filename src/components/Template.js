import React from 'react'
import Title from './Title'
import { Menu } from '../containers'
import Footer from './Footer'

const Template = ({children}) =>
    <div class="news">
        <Title/>
        <Menu/>
        {children}
        <Footer/>
    </div>

export default Template