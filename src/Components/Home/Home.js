import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

class Home extends Component {
    render(){
        return(
            <main>
              <section className="main-section">
                  <img className="background-image" src="https://i.imgur.com/efsiBNt.jpg"/>
                  <div className="main-content-area">
                      <h1>Skill Up to <div>Next Level</div></h1>
                      <h3><span>Challenge</span> others and <span>Practice</span> yourself <div>against
                      time in different subjects.</div></h3>
                      <a href="#" className="btn btn-sm">Start Quiz</a>
                  </div>
              </section>

              <section className="content container-fluid">
                  <div className="row justify-content-center">
                      <div className="col col">
                          <img className="content-image" src="https://i.imgur.com/azkKnMe.jpg"/>
                      </div>
                      <div className="col col">
                        <div className="content-area">
                          <h1>subjects</h1>
                          <hr />
                          <h3>Choose from our largest collection of subjects.</h3>
                        </div>
                      </div>
                  </div>
              </section>

              <section className="content container-fluid">
                  <div className="row justify-content-center">
                      <div className="col">
                        <div className="content-area">
                          <h1>Challenge</h1>
                          <hr />
                          <h3>Choose from our largest collection of subjects.</h3>
                        </div>
                      </div>
                      <div className="col">
                          <img className="content-image" src="https://i.imgur.com/9BWq0c7.jpg"/>
                      </div>
                  </div>
              </section>

              <section className="content container-fluid">
                  <div className="row justify-content-center">
                      <div className="col">
                          <img className="content-image" src="https://i.imgur.com/OaqZYmZ.jpg"/>
                      </div>
                      <div className="col">
                        <div className="content-area">
                          <h1>Practice</h1>
                          <hr />
                          <h3>Choose from our largest collection of subjects.</h3>
                        </div>
                      </div>
                  </div>
              </section>
            </main>
        )
    }
}

export default Home;

