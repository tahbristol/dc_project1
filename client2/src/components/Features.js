import React, { Component } from 'react';

const Features = () => {
	return(
		<section className="features" id="features">
		 <div className="">
			 <div className="section-heading text-center">
				 <h2>Your One Stop Shop</h2>
				 <p className="text-muted">Save space, save time and keep up to date, in one place.</p>
				 <hr></hr>
			 </div>
			 
			 <div className="row">
							 <div className="divInline">
								 <div className="feature-item">
									 <i className="icon-screen-smartphone text-primary"></i>
									 <h3>All in One Place</h3>
									 <p className="text-muted">No need to download multiple apps. Save your phone space and get all posts in one place!</p>
								 </div>
							 </div>
							 <div className="divInline">
								 <div className="feature-item">
									 <i className="icon-camera text-primary"></i>
									 <h3>Flexible Use</h3>
									 <p className="text-muted">View, share and respond to posts in your feed without leaving the app.</p>
								 </div>
							 </div>
							 <div className="divInline">
								 <div className="feature-item">
									 <i className="icon-present text-primary"></i>
									 <h3>The Go To Sites</h3>
									 <p className="text-muted">Integrate your accounts from Twitter, Facebook, Linkedin, Pintrest and the like.</p>
								 </div>
							 </div>
							 <div className="divInline">
								 <div className="feature-item">
									 <i className="icon-lock-open text-primary"></i>
									 <h3>Socially Motivated</h3>
									 <p className="text-muted">Made for you, free for you. <br />Forever!</p>
								 </div>
							 </div>
			 </div>
		 </div>
	 </section>
	)
}

export default Features;