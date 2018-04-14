import React, { Component } from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Signin from "../Signin/Signin.js";
import Signup from '../Signup/Signup.js';

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Main App component that renders */}
        <Header />
        <Signin />
         
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default App;