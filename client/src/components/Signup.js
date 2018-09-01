import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Signup = () => {
	
	return(
		<Form className="registerForm">
			<FormGroup>
		 		<Label for="suEmail">Email</Label>
		 		<Input type="email" name="suEmail" id="suEmail" placeholder="" autocomplete="nope"/>
			</FormGroup>
			 
			<FormGroup>
			 	<Label for="suPassword">Password</Label>
				<Input type="password" name="suPassword" id="suPassword" placeholder="" autocomplete="nope"/>
			</FormGroup>
			 
			<FormGroup>
				<Label for="suPasswordConfirmation">Password</Label>
				<Input type="password" name="suPasswordConfirmation" id="suPasswordConfirmation" placeholder="" autocomplete="nope"/>
			</FormGroup>
			
		 	<Button>Submit</Button>
		</Form>
	)
}
			
	
export default Signup;