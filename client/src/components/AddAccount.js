import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddAccount = ({addAccount}) => {
	return(
		<div className="addAccountContainer card">
			<h3>Add Account</h3>
			<Form onSubmit={addAccount}>
				<FormGroup>
					<Label for="accountName">Account Name</Label>
					<Input type="text" name="accountName" id="account_name" />
				</FormGroup>
				
				<FormGroup>
					<Label for="platform">Platform</Label>
					<Input type="select" name="platform" id="platform">
						<option>Twitter</option>
						<option>Facebook</option>
						<option>Linkedin</option>
					</Input>
				</FormGroup>
				
				<Button color="success">Add</Button>
			</Form>
		</div>
		
	)
}

export default AddAccount;