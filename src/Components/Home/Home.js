import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

class Home extends Component {
    render(){
        return(
            <main>
                <div className="container-fluid" id="main1">
                <div className="container">
              <section className="main-section">
                   <div className="main-content-area">
                     <div className="col-md-12"><h1 className="h1-responsive">Skill Up to</h1></div>
                     <div className="col-md-12"><h1 className="h1-responsive">Next Level</h1></div>
                     <div className="col-md-12">
                     <br/>
                     <h3 className="h3-responsive"><span>Challenge</span> others and <span>Practice</span> yourself <div className="linespace">against
                      time in different subjects.</div></h3>
                     </div>
                     <div className="col-md-12"><div className="row"><br/></div></div>
                     <div className="col-md-12">
                     <a href="#" className="btn btn-sm start">Start Quiz</a>
                     </div>

                  </div>
              </section>
              </div>
              </div>
                <div className="container-fluid">
                <div className="row" id="reverseactive">
                <div className="col-md-6">
                    <img src="https://i.imgur.com/azkKnMe.jpg" id="row-1-image" alt="subjects" />
                    </div>
                    <div className="col-md-6">
                    <div className="col-content">
                        <div className="content-area">
                          <h1>Subjects</h1>
                          <hr />
                          <h3>Choose from our largest collection of subjects.</h3>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
                <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-6">
                    <div className="col-content">
                    <div className="content-area">
                        <h1>Challenge</h1>
                          <hr />
                          <h3>Choose from our largest collection of subjects.</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 image"><img src="https://i.imgur.com/9BWq0c7.jpg" id="row-1-image" alt="challenge" /></div>
                </div>
                </div>
                <div className="container-fluid">
                <div className="row" id="reverseactive">
                <div className="col-md-6"><img src="https://i.imgur.com/OaqZYmZ.jpg" id="row-1-image" alt="practice" /></div>

                    <div className="col-md-6">
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
