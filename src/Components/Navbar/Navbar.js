import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

import logo from '../../assets/images/skillup logo.jpg';



class Navbar extends Component {
    render(){
        return(
            // <Router>
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" id="navbar">
                
                   <a className="navbar-brand" href="">
                   <img alt="SKILL UP logo" src={logo}/>
                    </a>
                    

             {/* Adding Bootstrap 4 Collapsible menu for compatability with mobile devices */}
                
              <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation" 
              >
              <span className="navbar-toggler-icon"></span>
            </button>

                {/* DO NOT MODIFY THESE LINKS, think of them as <a href = ""></a> 
                you can add classes to them using className = "" */}
              
              <div className="collapse navbar-collapse flex-row-reverse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className = "navLink" to = "/Login">
                            Log In 
                        </Link> 
                    </li> 
               
                    <li className="nav-item">
                        <Link className = "navLink" to = "/Signup">
                           Sign Up 
                        </Link> 
                    </li> 
                </ul>
               
               </div>
                 
            </nav>
            </div>
        );
    }
}

export default Navbar;