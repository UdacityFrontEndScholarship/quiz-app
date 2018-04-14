import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Signup.css';


class Signup extends Component {
	render(){
		return (
			// Signup goes here
			<main>
                {/* Write your Signup here */}
                <div className="signup-signin-form-container">

                	<div className="signup-signin-btn-container">

                		<span className="signup-btn-container"><button className="signup-btn"> <span className="btn-text"> Sign Up </span> </button></span>
                		<span className="signin-btn-container"><button className="signup-btn"> <span className="btn-text"> Sign In </span> </button></span>

                	</div>

					<div className="form-container">

                		<form action="#" method="POST">

                			<div className="name-container">

                				<input className="first-name" type="text" name="firstName" placeholder="First Name" required />
                				<input className="last-name" type="text" name="lastName" placeholder="Last Name" required />

                			</div>
                			
                			<input className="email" type="email" name="email" placeholder="Email ID" required />
                			
                			<div className="password-container">

                				<input className="password" type="password" name="password" placeholder="password" required />
                				<input className="conform-password" type="password" name="conformPassword" placeholder="Conform Password" required />
                			
                			</div>

                			<div className="submit-btn-container">

                				<button class="submit" type="submit"> <span className="btn-text"> Sign Up </span> </button>

                			</div>

                		</form>

                	</div>

                	<div className="google-github-btn-container">

                		<div className="google-btn-container">

                			<button className="google-btn"> 

                				<img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" height="20px" width="20px"/> <span className="btn-text"> Sign Up with Google </span> 

                			</button>

                		</div>

                		<div className="github-btn-container">

                			<button className="github-btn"> 

                				<img src="https://image.flaticon.com/icons/svg/25/25231.svg" height="20px" width="20px" /> <span className="btn-text"> Sign Up with Github </span> 

                			</button>

                		</div>

                	</div>

                </div>
			</main>
		);
	}
}

export default Signup;
