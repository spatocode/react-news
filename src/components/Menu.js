import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () =>
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/science">Science</NavLink>
                </li>
                <li>
                    <NavLink to="/sports">Sports</NavLink>
                </li>
                <li>
                    <NavLink to="/technology">Technology</NavLink>
                </li>
                <li>
                    <NavLink to="/politics" >Politics</NavLink>
                </li>
                <li>
                    <NavLink to="/business" >Business</NavLink>
                </li>
            </ul>
        </nav>
    </div>

export default Menu