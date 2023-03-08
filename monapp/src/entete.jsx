import React from "react";
import './entete.css'
import {Link}  from "react-router-dom";

function Nav()
{
    return (
        <nav>
            <ul>
                <Link to='/'><li>Home </li></Link>
                <Link to='/about' > <li>About</li></Link>
                <Link to='/calc' > <li>Calculator</li></Link>

            </ul>
        </nav>
    )
}
export default Nav;