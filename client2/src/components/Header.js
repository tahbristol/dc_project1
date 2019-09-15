import React, { Component } from 'react';
import cardExample from '../images/cardClassroomTweetRaised.png';

const Header = () => {
	
	return(
		<header className="masthead">
		 <div className="h-100">
			 <div className="row h-100">
				 <div className="col-lg-7 my-auto">
					 <div className="header-content mx-auto">
						 <h1 className="mb-5">It would be great to have all of your feeds in a single place, Right?</h1>
						 <h1 className="mb-5"> Enter the Stalk Market.</h1>
						 <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now!</a>
					 </div>
				 </div>
				 <div className="col-lg-5 my-auto">
					 <div className="device-container">
						 <img id="cardExample" className="img-fluid" src={cardExample} alt=""></img>
						 <div className="device-mockup iphone6_plus portrait white">
							 <div className="device">
								 <div className="screen">
								 </div>
								 <div className="button">
								 </div>
							 </div>
						 </div>
					 </div>
				 </div>
			 </div>
		 </div>
	 </header>
	)
}

export default Header;