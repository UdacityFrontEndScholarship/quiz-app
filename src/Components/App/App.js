import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

import Register from "../Signup-Signin Page/Register";
import Welcome from "../Welcome Page/Welcome";
import Dashboard from "../Dashboard/Dashboard";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
class App extends Component {
  componentDidMount(){
    // console.log(this.props.fetchUser(), this.props.fetchUser);
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
        <div className="App">
          {/* Main App component that renders */}
          <Switch>
            <Route exact path = "/dashboard" component = {Dashboard} />

            <Route exact path = "/Signup" component = {Register} />
            
            {/* passing a prop to render login instead of signup */}
            <Route exact path = "/Login" 
              render = {()=> <Register shouldLogInRender = "true" />} />

            <Route exact path = "/" component = {Welcome} />
          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
