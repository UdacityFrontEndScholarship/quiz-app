import React, { Component } from "react";
import Navbar from "../Navbar/Navbar.js";
import Home from "../Home/Home.js";
import Footer from "../Footer/Footer.js";

import "bootstrap/dist/css/bootstrap.css";
import "./Welcome.css";

class Welcome extends Component {
    render(){
        return (
           <div id = "welcome">
                <Navbar/>
                <Home />
                <Footer />
            </div>

        )
    }
}


export default Welcome;
