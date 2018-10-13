import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({show, hide, fullMenu}) => {
    return(
    <div className="menu" onMouseOver={show} onMouseOut={hide}>
        <nav style={ fullMenu }>
            <ul>
                <li>
                    <Link to="/" title="Home"><span className="icon"><i className="fa fa-home"></i></span><span className="menu-name">Home</span></Link>
                </li>
                <li>
                    <Link to="/science" title="Science"><span className="icon"><i className="fa fa-flask"></i></span><span className="menu-name">Science</span></Link>
                </li>
                <li>
                    <Link to="/sports" title="Sports"><span className="icon"><i className="fa fa-futbol-o"></i></span><span className="menu-name">Sports</span></Link>
                </li>
                <li>
                    <Link to="/technology" title="Technology"><span className="icon"><i className="fa fa-rocket"></i></span><span className="menu-name">Technology</span></Link>
                </li>
                <li>
                    <Link to="/politics" title="Politics"><span className="icon"><i className="fa fa-bookmark"></i></span><span className="menu-name">Politics</span></Link>
                </li>
                <li>
                    <Link to="/business" title="Business"><span className="icon"><i className="fa fa-briefcase"></i></span><span className="menu-name">Business</span></Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default Menu