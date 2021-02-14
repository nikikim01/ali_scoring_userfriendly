import React, { Component } from "react";
import { Link } from "@reach/router";
import "./NavBar.css"

import "../../utilities.css";

/**
 * The navigation bar at the top of all pages. 
 */

 class NavBar extends Component {
     constructor(props) {
         super(props);
     }
     render() {
         return (
             <>
            <nav className = "NavBar-container">
                <Link to='/' className="NavBar-link">ALI Proximal Vocab Scorer</Link>
                <Link to='/score' className="NavBar-link">Score Test(s)</Link>
            </nav>

             </>
         )
     }

 }

 export default NavBar;