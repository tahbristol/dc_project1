import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class TokenLogin extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<div className="marTop200"></div>
				<div className="loginContainer">
					<h2>Login</h2>
					<Form className="loginForm" onSubmit={this.props.loginWithToken}>
					<FormGroup>
						<Label for="token">Password</Label>
						<Input type="token" name="token" id="token" placeholder="" defaultValue={this.props.match.params.token} autoComplete="nope"/>
					</FormGroup>
					
					<Button>Submit</Button>
				</Form>
				</div>
			</div>
		)
	}
}

export default TokenLogin;