import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Menu = ({show, hide, fullMenu}) => {
    return(
    <div className="menu" onMouseOver={show} onMouseOut={hide}>
        <nav style={ fullMenu }>
            <ul>
                <li>
                    <NavLink to="/" title="Home"><span className="icon"><i className="fa fa-home"></i></span><span className="menu-name">Home</span></NavLink>
                </li>
                <li>
                    <NavLink to="/science" title="Science"><span className="icon"><i className="fa fa-flask"></i></span><span className="menu-name">Science</span></NavLink>
                </li>
                <li>
                    <NavLink to="/sports" title="Sports"><span className="icon"><i className="fa fa-futbol-o"></i></span><span className="menu-name">Sports</span></NavLink>
                </li>
                <li>
                    <NavLink to="/technology" title="Technology"><span className="icon"><i className="fa fa-rocket"></i></span><span className="menu-name">Technology</span></NavLink>
                </li>
                <li>
                    <NavLink to="/politics" title="Politics"><span className="icon"><i className="fa fa-bookmark"></i></span><span className="menu-name">Politics</span></NavLink>
                </li>
                <li>
                    <NavLink to="/business" title="Business"><span className="icon"><i className="fa fa-briefcase"></i></span><span className="menu-name">Business</span></NavLink>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Menu