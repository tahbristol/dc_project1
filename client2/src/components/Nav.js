import React, { Component } from 'react';
import '../css/navContainer.css';

const Nav = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div className="container">
				<a className="navbar-brand js-scroll-trigger" href="/">Stalk Market</a>
				<button 
					className="navbar-toggler navbar-toggler-right"
					type="button" 
					data-toggle="collapse" 
					data-target="#navbarResponsive" 
					aria-controls="navbarResponsive" 
					aria-expanded="false" 
					aria-label="Toggle navigation"
					>
					Menu
					<i className="fa fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="">
							<a className="nav-link js-scroll-trigger" href="/login">Login</a>
						</li>
						
						<li className="">
							<a className="nav-link js-scroll-trigger" href="/signout">Sign Out</a>
						</li>
						
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href=""></a>
						</li>
						
						<li className="nav-item">
							<a className="" href="#features">Features</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Nav;