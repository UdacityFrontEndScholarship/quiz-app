import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "../Signup-Signin Page/Register.js";
import Welcome from "../Welcome Page/Welcome.js";


import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {

    
    return (
      <Router>
        <div className="App">
          {/* Main App component that renders */}
          <Switch>
            
            <Route exact path = "/Signup" component = {Register} />
            
            {/* passing a prop to render login instead of signup */}
            <Route exact path = "/Login" 
              render = {()=> <Register shouldLogInRender = "true" />} />

            <Route exact path = "" component = {Welcome} />
          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
