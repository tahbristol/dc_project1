import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
	      <div className="container">
	        <a className="navbar-brand js-scroll-trigger" href="/">Stalk Market</a>
	        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
	          Menu
	          <i className="fa fa-bars"></i>
	        </button>
	        <div className="collapse navbar-collapse" id="navbarResponsive">
	          <ul className="navbar-nav ml-auto">
	            <li className={this.props.isAuthenticated ? "hide" : "show" + " nav-item"}>
	              <a className="nav-link js-scroll-trigger" href="/login">Login</a>
	            </li>
							
							<li className={this.props.isAuthenticated ? "show" : "hide" + " nav-item"}>
	              <a className="nav-link js-scroll-trigger" href="/signout">Sign Out</a>
	            </li>
							
							<li className="nav-item" onClick={this.props.signOut}>
								<a className="nav-link js-scroll-trigger" href=""></a>
	            </li>
							
	            <li className="nav-item">
	              <a className={this.props.isAuthenticated ? "hide" : "show" + " nav-link js-scroll-trigger"} href="#features">Features</a>
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
}

export default NavBar;