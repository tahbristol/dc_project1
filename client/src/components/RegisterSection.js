import React, { Component } from 'react';
import Signup from './Signup';

const RegisterSection = ({props}) => {
	return(
		<section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">Sign Up</h2>
						
						<Signup />
						
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

export default RegisterSection;