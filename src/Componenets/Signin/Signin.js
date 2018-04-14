import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Signin.css';
import googleLogo from  '../../assets/images/googleoriginal.svg';
import githubLogo from  '../../assets/images/githuboriginal.svg';


class Signin extends Component {
	render(){
		return (
			// Signin goes here
			<main>
                {<div ClassName="maincontainer" style={{margin: '80px'}}>

         <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-md-offset-4">
                      <div className="card">
                          <div className="card-header">
                            <div className="container">
                              <div className="row">
                                  <div className="col-xs-6 col-md-6 col-lg-6 signup text-center" id="signup-link">
                                      
                                       <a href="#signup" className="active" id="signup"><strong>Sign Up</strong></a>
                                       
                                  </div>
                                  <div className="col-xs-6 col-md-6 col-lg-6 signin text-center" id="signin-link">

                                       <a href="#signin" id="signin"><strong>Sign In</strong></a>

                                  </div>
                               </div>
                             </div>
                           </div>
                           <div className="card-body">
               
               <div className="container"> 
                <div className="row justify-content-center">
                <div className="form-container col-md-10">                 
              <form onsubmit="" action="" method="POST">  
              <div className="form-group">
                <input type="text" name="email" placeholder="Your Email ID" className="form-input form-control"/>
                
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" className="form-input form-control"/>
                
              </div>  
              <div className="form-group">
                <input type="submit" className="form-btn btn btn-primary btn-block" value="Sign In" name="btn-login"/>
              </div>

             

              <button type="button" class="btn btn-default btn-block" >
               <img src={googleLogo} width="40" height="40"/>
                  &nbsp; &nbsp; &nbsp; Sing In with Google
               </button>

              
                            
                 <button type="button" class="btn btn-default btn-block" >
               <img src={githubLogo} width="40" height="40"/>
                  &nbsp; &nbsp; &nbsp; Sing In with Github
               </button>
                  
                
                  
                  
                  
              </form>
              </div>
              </div>
              </div>
                           </div>
                        </div>
                      </div>
             </div>
             </div>
          </div>}
                
			</main>
		);
	}
}

export default Signin;
