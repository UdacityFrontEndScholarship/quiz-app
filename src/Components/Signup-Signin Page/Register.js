import React, { Component } from "react";
import Form from "../Form/Form.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

import "bootstrap/dist/css/bootstrap.css";
import "./Register.css"

class Register extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          // Dont touch this, I have no idea how its working but its working!!
          signUp: this.props.shouldLogInRender === "true"? false : true,
          login: this.props.shouldLogInRender === "true" ? false : true
          
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
    
    render(){
        return(
            <main>
              <Header />
       
                <Form 
                    signUp = {this.signUpHandler}
                    logIn = {this.logInHandler}
                    selectForm = {this.state.signUp}
                />
                
                <Footer />
            </main>
        )

    }
}

export default Register;