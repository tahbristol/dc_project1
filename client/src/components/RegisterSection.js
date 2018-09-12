import React, { Component } from 'react';
import Signup from './Signup';

class RegisterSection extends Component {
	constructor(props){
		super(props)
		
	}
	
	componentDidMount(){
		this.displayClass = this.props.signedUp === true ? "Login" : "Sign Up";
	}
	
	render(){
		return(
			<section className="download bg-primary text-center" id="download">
	      <div className="container">
	        <div className="row">
	          <div className="col-md-8 mx-auto">
	            <h2 className="section-heading">{this.displayClass}</h2>
							
							<Signup handleSignup={this.props.handleSignup} signedUp={this.props.signedUp}/>
							
	           	<div className="badges">
	              <a className="badge-link" href="#"><img src="" alt=""></img></a>
	              <a className="badge-link" href="#"><img src="" alt=""></img></a>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
		)
	}
}

export default RegisterSection;