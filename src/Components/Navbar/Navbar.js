import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";


class Navbar extends Component {
    render(){
        return(
            // <Router>
            <nav>
                <div>Add nav bar elements here</div>
                {/* DO NOT MODIFY THESE LINKS, think of them as <a href = ""></a> 
                you can add classes to them using className = "" */}
                <ul>
                    <li>
                        <Link className = "navLink" to = "/Login">
                            Log in (click me to see magic)
                        </Link> 
                    </li> 
                </ul>
                <ul>
                    <li>
                        <Link className = "navLink" to = "/Signup" >
                            Sign Up (click me to see magic!)
                        </Link>
                    </li> 
                </ul>
            </nav>
        )
    }
}

export default Navbar;