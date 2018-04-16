import React from 'react';
import Signin from '../Signin/Signin.js';
import Signup from '../Signup/Signup.js';
import "bootstrap/dist/css/bootstrap.css";
import "./Form.css";
const Form = (props) => {
    return (
        <div className="maincontainer" style={{ margin: "5em" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-md-offset-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="container">
                                    <div className="row sign-in-up-container">
                                        <div
                                            className="col-xs-6 col-md-6 col-lg-6 signup text-center"
                                            id="signup-link"
                                        >
                                            <a onClick = {props.signUp}
                                                href="#signup"
                                                className="active"
                                                id="signup">Sign Up</a>

                                        </div>
                                        <div
                                            className="col-xs-6 col-md-6 col-lg-6 signin text-center"
                                            id="signin-link"
                                        >
                                            <a onClick = {props.logIn}
                                                href="#signin"
                                                id="signin">Sign In</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Form switch logic here */}
                            {props.selectForm?<Signup/> : <Signin/>} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Form;
