import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

class Footer extends Component {

	render() {
		return (
			// <!--Footer-->
			<footer>
				{/* Write your HTML here */

					
					<div className="container-fluid">

						<div className="row">

							<div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 footer__links align-items-center justify-content my-2">
								<ul className="text-center row">
									<li className="col-xs-12 col-sm-12 col-md-4 col-lg-2"><a href="#">Contact Us</a></li>
									<li className="col-xs-12 col-sm-12 col-md-4 col-lg-2"><a href="#">Udacity</a></li>
									<li className="col-xs-12 col-sm-12 col-md-4 col-lg-2"><a href="#">GitHub Repo</a></li>
									<li className="col-xs-12 col-sm-12 col-md-4 col-lg-2"><a href="#">Contributors</a></li>
									<li className="col-xs-12 col-sm-12 col-md-4 col-lg-2"><a href="#">Send Feedback</a></li>
									<li className="col-xs-12 col-sm-12 col-md-4 col-lg-2"><a href="#">Privacy Terms</a></li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 social my-2 align-items-center d-flex justify-content-center">
								<div className="text-center">
									<div className="footer__social d-flex justify-content-around">
										<a href="#" title="github" className="social-link col" id="github">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" height="20px" width="20px"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
										</a>
										<a href="#" title="facebook" className="social-link col" id="facebook">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" height="20px" width="20px"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229" /></svg>
										</a>
										<a href="#" title="google-plus" className="social-link col" id="google-plus">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="20px" width="20px"><path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" /></svg>
										</a>
									</div>
								</div>
							</div>
						</div>

					</div>
}
			</footer>

		)
	}

}

export default Footer;
