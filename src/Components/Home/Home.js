import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

class Home extends Component {
    render(){
        return(
            <main>
                <div class="container-fluid" id="main1">
                <div class="container">
              <section className="main-section">
                   <div class="main-content-area">
                     <div class="col-md-12"><h1 class="h1-responsive">Skill Up to</h1></div>
                     <div class="col-md-12"><h1 class="h1-responsive">Next Level</h1></div>
                     <div class="col-md-12">
                     <br/>
                     <h3 class="h3-responsive"><span>Challenge</span> others and <span>Practice</span> yourself <div className="linespace">against
                      time in different subjects.</div></h3>
                     </div>
                     <div class="col-md-12"><div class="row"><br/></div></div>
                     <div class="col-md-12">
                     <a href="#" className="btn btn-sm">Start Quiz</a>
                     </div>
                      
                  </div>
              </section>
              </div>
              </div>
                <div class="container-fluid">
                <div class="row" id="reverseactive">
                <div class="col-md-6">
                    <img src="https://i.imgur.com/azkKnMe.jpg" id="row-1-image"/></div>
                    <div class="col-md-6">
                    <div className="col-content">
                        <div className="content-area">
                          <h1>subjects</h1>
                          <hr />
                          <h3>Choose from our largest collection of subjects.</h3>
                        </div>
                      </div>
                    </div>
                </div>    
                </div>
                
                <div class="container-fluid">
                <div class="row" >
                    <div class="col-md-6">
                    <div className="col-content">
                    <div className="content-area">
                        <h1>Challenge</h1>
                          <hr />
                          <h3>Choose from our largest collection of subjects.</h3>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6"><img src="https://i.imgur.com/9BWq0c7.jpg" id="row-1-image"/></div>

                </div>    
                </div>
                
                <div class="container-fluid">
                <div class="row" id="reverseactive">
                <div class="col-md-6"><img src="https://i.imgur.com/OaqZYmZ.jpg" id="row-1-image"/></div>

                    <div class="col-md-6">
                    <div className="col-content">
                        <div className="content-area">
                        <h1>Practice</h1>
                          <hr />
                          <h3>Choose from our largest collection of subjects.</h3>
                        </div>
                      </div>
                    </div>

                </div>    
                </div>
            </main>
        )
    }
}

export default Home;
