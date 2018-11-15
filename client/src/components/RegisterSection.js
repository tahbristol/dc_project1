import React, { Component } from 'react';
import Signup from './Signup';
import AuthStatusDisplay from './AuthStatusDisplay';

class RegisterSection extends Component {
	constructor(props){
		super(props)
		
	}
	
	render(){
		return(
			<section className="download bg-primary text-center" id="download">
	      <div className="">
					<AuthStatusDisplay showAuthFail={this.props.showAuthFail} showSignupSuccess={this.props.showSignupSuccess} />
	        <div className="row">
	          <div className="col-md-8 mx-auto">
	            <h2 className="section-heading">Sign Up</h2>
							
							<Signup handleSignup={this.props.handleSignup} />
							
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