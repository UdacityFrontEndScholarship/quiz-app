import React, {Component} from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

class Footer extends Component {
	render(){
		return (
			// <!--Footer-->
		<footer className="page-footer font-small stylish-color-dark pt-4 mt-4">

			{/* <!--Footer Links--> */}
			<div className="container text-center text-md-left">
				<div className="row">

					{/* <!--First column--> */}
					<div className="col-md-4">
						<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
						<p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
							amet, consectetur adipisicing elit.</p>
					</div>
					{/* <!--/.First column--> */}

					<hr className="clearfix w-100 d-md-none"/>

					{/* <!--Second column--> */}
					<div className="col-md-2 mx-auto">
						<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#!">Link 1</a>
							</li>
							<li>
								<a href="#!">Link 2</a>
							</li>
							<li>
								<a href="#!">Link 3</a>
							</li>
							<li>
								<a href="#!">Link 4</a>
							</li>
						</ul>
					</div>
					{/* <!--/.Second column--> */}

					<hr className="clearfix w-100 d-md-none"/>

					{/* <!--Third column--> */}
					<div className="col-md-2 mx-auto">
						<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#!">Link 1</a>
							</li>
							<li>
								<a href="#!">Link 2</a>
							</li>
							<li>
								<a href="#!">Link 3</a>
							</li>
							<li>
								<a href="#!">Link 4</a>
							</li>
						</ul>
					</div>
					{/* <!--/.Third column--> */}

					<hr className="clearfix w-100 d-md-none"/>

					{/* <!--Fourth column--> */}
					<div className="col-md-2 mx-auto">
						<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#!">Link 1</a>
							</li>
							<li>
								<a href="#!">Link 2</a>
							</li>
							<li>
								<a href="#!">Link 3</a>
							</li>
							<li>
								<a href="#!">Link 4</a>
							</li>
						</ul>
					</div>
					{/* <!--/.Fourth column--> */}
				</div>
			</div>
			{/* <!--/.Footer Links--> */}

		</footer>
            
		)
	}
}

export default Footer;
