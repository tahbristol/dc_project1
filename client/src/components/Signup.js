import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Signup = ({showLogin}) => {
		
	return(
		<Form className="registerForm">
			<FormGroup>
		 		<Label for="suEmail">Email</Label>
		 		<Input type="email" name="suEmail" id="suEmail" placeholder="" autoComplete="nope"/>
			</FormGroup>
			 
			<FormGroup>
			 	<Label for="suPassword">Password</Label>
				<Input type="password" name="suPassword" id="suPassword" placeholder="" autoComplete="nope"/>
			</FormGroup>
			 
			<FormGroup className={showLogin === true ? "hide" : "show"}>
				<Label for="suPasswordConfirmation">Confirm Password</Label>
				<Input type="password" name="suPasswordConfirmation" id="suPasswordConfirmation" placeholder="" autoComplete="nope"/>
			</FormGroup>
			
		 	<Button>Submit</Button>
		</Form>
	)
}
			
	
export default Signup;