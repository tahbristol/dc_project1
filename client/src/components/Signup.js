import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends Component {
	constructor(props){
		super(props)
		
	}
	
	componentDidMount(){
		this.displayClass = this.props.signedUp === true ? "hide" : "show";
	}
	
	render(){
		return(
			<Form className="registerForm" onSubmit={this.props.handleSignup}>
				<FormGroup>
					<Label for="Email">Email</Label>
					<Input type="email" name="email" id="email" placeholder="" autoComplete="nope"/>
				</FormGroup>
				 
				<FormGroup>
					<Label for="Password">Password</Label>
					<Input type="password" name="password" id="password" placeholder="" autoComplete="nope"/>
				</FormGroup>
				 
				<FormGroup className={this.displayClass}>
					<Label for="PasswordConfirmation">Confirm Password</Label>
					<Input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="" autoComplete="nope"/>
				</FormGroup>
				
				<Button>Submit</Button>
			</Form>
		)
	}

}
			
	
export default Signup;