import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Post from './components/Post';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/Navbar';
import Header from './components/Header';
import RegisterSection from './components/RegisterSection';
import Features from './components/Features';
import ActionCall from './components/ActionCall';
import Social from './components/Social';
import Footer from './components/Footer';
import UserPage from './components/UserPage';
import logo from './logo.svg';
import './App.css';
import './postCard.css';
import './signup.css';
import './userPage.css';
import './navContainer.css';
import './spacing.css';

class App extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			posts: [],
			user: {},
			signedUp: false
		}
	}
	
	componentDidMount(){
		fetch('http://localhost:3001/v1/posts', 
			{
				
				method: 'GET',
				headers: {
					'X-User-Email': this.state.user.email || 'tahbristol@gmail.com',
					'X-User-Token': this.state.user.authentication_token || 'Utgb-N7qYyxEDU2Dq25k'
				}
			})
		.then(data => data.json())
		.then(jsonData => {
			this.setState({
				posts: jsonData,
			})
		})
		
		if(this.state.user.authentication_token){
			this.setState({
				signedUp: true
			})
		}
		else {
			this.setState({
				signedUp: false
			})
		}
	}
		
	handleSignup = (e) => {
		e.preventDefault();
		const form = e.target;
		let data = {
			user: {
				email: form.email.value,
				password: form.password.value,
				password_confirmation: form.passwordConfirmation.value
			}
		}
		
		fetch('http://localhost:3001/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset-utf-8'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			this.setState({
				user: data
			})
		})
	}
	
  render() {
    return (
				<Router>
					<div>
						<NavBar signedUp={this.state.signedUp} />
						<Route exact path="/" render={Header} />
						<Route exact path="/" component={(props) => <RegisterSection handleSignup={this.handleSignup} />} />
						<Route exact path="/" render={(props) => <Features posts={this.state.posts} />} />
						<Route exact path="/" render={ActionCall} />
						<Route exact path="/" render={Social} />
						<Route exact path="/" render={Footer} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/userpage" render={(props) => <UserPage posts={this.state.posts} />} />
					</div>
			</Router>
    );
  }
}

export default App;
