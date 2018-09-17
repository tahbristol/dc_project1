import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
		this.getPosts();
	}
	
	getPosts(){
		debugger
		fetch('http://localhost:3001/v1/posts', 
			{
				method: 'GET',
				headers: {
					'X-User-Email': this.state.user.email,
					'X-User-Token': this.state.user.authentication_token
				}
			})
		.then(response => {
			if(response.ok)
				return response.json();
			return Error(response.statusText);
			})
		.then(posts => {
			this.setState({
				posts: posts || [],
			})
		})
		.catch(error => {
			console.log(error);
		})
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
		.then(response => {
			if(response.ok)
				return response.json();
			throw Error(response.statusText);
		})
		.then(data => {
			this.setState({
				user: data
			})
			this.getPosts();
			window.location = '/userpage'; //need to implement react router redirect here.
			//next steps:
			// 1. Get posts for user who is located in the this.state
		})
		.catch(error => {
			console.log(error);
		})
	}
	
	handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		let data = {
				email: form.email.value,
				password: form.password.value
		}
		
		fetch('http://localhost:3001/v1/sessions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset-utf-8'
			},
			body: JSON.stringify(data)
		})
		.then(response => {
			if(response.ok)
				return response.json();
			throw Error(response.statusText);
		})
		.then(data => {
			this.setState({
				user: data
			})
			debugger
			this.getPosts();
			window.location = '/userpage'; //need to implement react router redirect here. State leaves otherwise
			//next steps:
			// 1. Get posts for user who is located in the this.state
		})
		.catch(error => {
			console.log(error);
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
						<Route exact path="/login" component={(props) => <Login handleLogin={this.handleLogin} /> } />
						<Route exact path="/userpage" render={(props) => <UserPage posts={this.state.posts} />} />
					</div>
			</Router>
    );
  }
}

export default App;
