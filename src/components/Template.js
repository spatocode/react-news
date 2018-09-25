import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

const Template = ({children}) =>
    <div class="news">
        <Menu />
        {children}
        <Footer/>
    </div>

export default Template