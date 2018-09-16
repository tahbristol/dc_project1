import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
	constructor(props){
		super(props)
		
	}
	
	render(){
		return(
			<div className="loginContainer">
				<h2>Login</h2>
			<Form className="loginForm" onSubmit={this.props.handleLogin}>
				<FormGroup>
					<Label for="Email">Email</Label>
					<Input type="email" name="email" id="email" placeholder="" autoComplete="nope"/>
				</FormGroup>
				 
				<FormGroup>
					<Label for="Password">Password</Label>
					<Input type="password" name="password" id="password" placeholder="" autoComplete="nope"/>
				</FormGroup>
				
				<Button>Submit</Button>
			</Form>
			</div>
		)
	}

}
			
	
export default Login;