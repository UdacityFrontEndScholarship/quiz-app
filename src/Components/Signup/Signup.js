import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Signup.css";

class Signup extends Component {
    render() {
        return (
            // Signup goes here
            <main>
                {/* Write your Signup here */}
                <div className="signup-signin-form-container container card-body">
                    <div className="form-container row justify-content-center">
                        <div className="form-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form action="#" method="POST">
                                <div className="name-container form-group">
                                    <div className="form-row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <input
                                                className="first-name form-input form-control border-custom-color"
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <input
                                                className="last-name form-input form-control border-custom-color"
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <input
                                                className="email form-input form-control border-custom-color"
                                                type="email"
                                                name="email"
                                                placeholder="Email ID"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="password-container form-group">
                                    <div className="form-row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <input
                                                className="password form-input form-control border-custom-color"
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                required
                                            />
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <input
                                                className="confirm-password form-input form-control border-custom-color"
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="submit-btn-container form-group">
                                    <div className="form-row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <input
                                                type="submit"
                                                className="form-btn btn btn-block font-weight-bold signup-button"
                                                value="Sign Up"
                                                name="btn-login"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="google-github-btn-container">
                                    <div className="google-btn-container form-group">
                                        <div className="form-row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <button className="google-btn btn btn-light btn-block border-custom-color">
                                                    <svg
                                                        className="google"
                                                        id="google"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 128 128"
                                                        height="20px"
                                                        width="20px"
                                                    >
                                                        <defs>
                                                            <style
                                                            >{`.cls-1{fill: #fff;}.cls-2{fill: #e33629;}.cls-3{fill: #f8bd00;}.cls-4{fill: #587dbd;}.cls-5{fill: #319f43;}`}</style>
                                                        </defs>
                                                        <title>google</title>
                                                        <g id="original">
                                                            <path
                                                                className="cls-1"
                                                                d="M44.59,4.21a63.28,63.28,0,0,0,4.33,120.9,67.6,67.6,0,0,0,32.36.35A57.13,57.13,0,0,0,107.18,112a57.44,57.44,0,0,0,16-26.26,74.33,74.33,0,0,0,1.61-33.58H65.27c0,8.23,0,16.46,0,24.69H99.74A29.72,29.72,0,0,1,87.08,96.37a36.16,36.16,0,0,1-13.93,5.5,41.29,41.29,0,0,1-15.1,0A37.16,37.16,0,0,1,44,95.74a39.3,39.3,0,0,1-14.5-19.42,38.31,38.31,0,0,1,0-24.63,39.25,39.25,0,0,1,9.18-14.91A37.17,37.17,0,0,1,76.13,27a34.28,34.28,0,0,1,13.64,8q5.83-5.8,11.64-11.63c2-2.09,4.18-4.08,6.15-6.22A61.22,61.22,0,0,0,87.2,4.59,64,64,0,0,0,44.59,4.21Z"
                                                            />
                                                            <path
                                                                className="cls-2"
                                                                d="M44.59,4.21a64,64,0,0,1,42.61.37A61.22,61.22,0,0,1,107.55,17.2c-2,2.14-4.11,4.14-6.15,6.22Q95.58,29.23,89.77,35a34.28,34.28,0,0,0-13.64-8,37.17,37.17,0,0,0-37.46,9.74,39.25,39.25,0,0,0-9.18,14.91L8.76,35.6A63.53,63.53,0,0,1,44.59,4.21Z"
                                                            />
                                                            <path
                                                                className="cls-3"
                                                                d="M3.26,51.5a62.93,62.93,0,0,1,5.5-15.9L29.49,51.69a38.31,38.31,0,0,0,0,24.63q-10.36,8-20.73,16.08A63.33,63.33,0,0,1,3.26,51.5Z"
                                                            />
                                                            <path
                                                                className="cls-4"
                                                                d="M65.27,52.15h59.52a74.33,74.33,0,0,1-1.61,33.58,57.44,57.44,0,0,1-16,26.26c-6.69-5.22-13.41-10.4-20.1-15.62A29.72,29.72,0,0,0,99.74,76.83H65.27C65.26,68.61,65.27,60.38,65.27,52.15Z"
                                                            />
                                                            <path
                                                                className="cls-5"
                                                                d="M8.75,92.4q10.37-8,20.73-16.08A39.3,39.3,0,0,0,44,95.74a37.16,37.16,0,0,0,14.08,6.08,41.29,41.29,0,0,0,15.1,0,36.16,36.16,0,0,0,13.93-5.5c6.69,5.22,13.41,10.4,20.1,15.62a57.13,57.13,0,0,1-25.9,13.47,67.6,67.6,0,0,1-32.36-.35,63,63,0,0,1-23-11.59A63.73,63.73,0,0,1,8.75,92.4Z"
                                                            />
                                                        </g>
                                                    </svg>{" "}
                                                    <span className="btn-text">
                                                        &nbsp; Sign Up with
                                                        Google{" "}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="github-btn-container form-group">
                                        <div className="form-row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <button className="github-btn btn btn-light btn-block border-custom-color">
                                                    <svg
                                                        className="github"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 128 128"
                                                        height="20px"
                                                        width="20px"
                                                    >
                                                        <g fill="#181616">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                                                            />
                                                            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                                                        </g>
                                                    </svg>{" "}
                                                    <span className="btn-text">
                                                        &nbsp; Sign Up with
                                                        Github{" "}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Signup;
