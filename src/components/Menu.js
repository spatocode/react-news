import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () =>
    <div className="menu">
        <nav>
            <ul>
                <li>
                    <NavLink to="/"><span className="icon"><i className="fa fa-home"></i></span><span className="name">Home</span></NavLink>
                </li>
                <li>
                    <NavLink to="/science"><span className="icon"><i className="fa fa-flask"></i></span><span className="name">Science</span></NavLink>
                </li>
                <li>
                    <NavLink to="/sports"><span className="icon"><i className="fa fa-futbol-o"></i></span><span className="name">Sports</span></NavLink>
                </li>
                <li>
                    <NavLink to="/technology"><span className="icon"><i className="fa fa-rocket"></i></span><span className="name">Technology</span></NavLink>
                </li>
                <li>
                    <NavLink to="/politics"><span className="icon"><i className="fa fa-bookmark"></i></span><span className="name">Politics</span></NavLink>
                </li>
                <li>
                    <NavLink to="/business" ><span className="icon"><i className="fa fa-briefcase"></i></span><span className="name">Business</span></NavLink>
                </li>
            </ul>
        </nav>
    </div>

export default Menu