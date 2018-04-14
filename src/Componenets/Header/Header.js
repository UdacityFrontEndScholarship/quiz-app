import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Header.css';

class Header extends Component {
	render(){
		return (
			// Header goes here
			<header>

				{/* Adding container-fluid div to contain navbar*/}

				<div className="container-fluid">
					<nav className="navbar navbar-expand-md navbar-light bg-light">

						{/* Remove text and add Logo image path later */}
						<a className="navbar-brand" href="#"><img alt="" src="" />SKILL UP</a>

						{ /* Adding Bootstrap 4 collapsible menu button for mobile devices */ }
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav ml-auto">
								<li className="">
									<a className="" href="#">How To Play <span className=""></span></a>
								</li>

								{/* Add padding (preferably left) for these list items for proper spacing */}
								<li className="">
									<a className="" href="#">Leaderboard</a>
								</li>
								
								<li className="">
									<a className="" href="#">Practice</a>
								</li>
								
								<li className="">
									<a className="" href="#">Log In</a>
								</li>
							</ul>
						</div>

					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
        
