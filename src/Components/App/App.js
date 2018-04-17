import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Form from '../Form/Form.js';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      signUp: true,
      login: false
      
    }
    this.signUpHandler =  this.signUpHandler.bind(this);
    this.logInHandler = this.logInHandler.bind(this);
  }
  signUpHandler(event){
    event.preventDefault();
    this.setState({
      signUp: true,
      login: false
    });
  }
  logInHandler(event){
    event.preventDefault();
    this.setState({
      signUp: false,
      login: true
    });
  }
  render() {

    
    return (
      <div className="App">
        {/* Main App component that renders */}
        <Header />
       
        <Form 
          signUp = {this.signUpHandler}
          logIn = {this.logInHandler}
          selectForm = {this.state.signUp}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
