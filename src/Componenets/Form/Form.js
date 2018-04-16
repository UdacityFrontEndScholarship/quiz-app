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
                        <div className="card border border-dark">
                            <div className="card-header border border-dark">
                                <div className="container">
                                    <div className="row border border-dark">
                                        <div className="col-xs-6 col-md-6 col-lg-6 signup text-center" id="signup-link">
                                            <a onClick = {props.signUp}
                                                href="#signup"
                                                className="btn btn-lg btn-block btn-dark active"
                                                role="button" aria-pressed="true" id="signup">Sign Up</a>

                                        </div>
                                        <div
                                            className="col-xs-6 col-md-6 col-lg-6 signin text-center" id="signin-link">
                                            <a onClick = {props.logIn}
                                                href="#signin" className="btn btn-lg btn-block btn-dark active" role="button" aria-pressed="true" id="signin">Sign In</a>
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
