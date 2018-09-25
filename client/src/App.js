import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
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
import Platform from './components/Platform';
import AddAccount from './components/AddAccount';
import FollowedAccount from './components/FollowedAccount';
import logo from './logo.svg';
import './css/App.css';
import './css/postCard.css';
import './css/signup.css';
import './css/userPage.css';
import './css/navContainer.css';
import './css/spacing.css';
import './css/platform.css';
import './css/addAccount.css';
import './css/followedAccount.css';

class App extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			posts: [],
			user: {},
			authenticated: false,
			userMenu: {
				showPlatforms: false,
				showFollowedAccounts: false,
				showPosts: true,
				addAccount: false
			},
			userPlatformInfo: {}
		}
	}
	
	componentDidMount(){
		this.getPosts();
	}
	
	stateKeys = () => {
		return Object.keys(this.state);
	}
	
	userMenuKeys = () => {
		return Object.keys(this.state.userMenu);
	}
	
	getPosts(){
		if(this.state.authenticated){
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
			
			fetch('http://localhost:3001/v1/user_platform_info',
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
			.then(userPlatformInfo => {
				this.setState({
					userPlatformInfo: userPlatformInfo
				})
			})
			.catch(error => {
				console.log(error);
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
		.then(response => {
			if(response.ok)
				return response.json();
			throw Error(response.statusText);
		})
		.then(data => {
			this.setState({
				user: data,
				authenticated: true
			})
			this.getPosts();
		})
		.catch(error => {
			console.log(error);
		})
	}
	
	handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		
		let user = {
				email: form.email.value,
				password: form.password.value
		}
		
		fetch('http://localhost:3001/v1/sessions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset-utf-8',
				'X-User-Email': this.state.user.email,
				'X-User-Token': this.state.user.authentication_token
			},
			body: JSON.stringify(user)
		})
		.then(response => {
			if(response.ok)
				return response.json();
			throw Error(response.statusText);
		})
		.then(data => {
			this.setState({
				user: data,
				authenticated: true
			})
			this.getPosts();
		})
		.catch(error => {
			console.log(error);
		})
	}
	
	signOut = () => {
		this.setState({
			user: {},
			authenticated: false,
			posts: []
		})
	}
	
	toggleUserMenu = (e) => {
		let itemToShow = e.target.id;
		let userMenu = {};
		
		this.userMenuKeys().map((key, idx) => {
			if(key.includes(itemToShow) || key === itemToShow)
				userMenu[key] =  true
			else
				userMenu[key] = false
				
			this.setState({userMenu: userMenu})
		})
	}
	
	addAccount = (e) => {
		e.preventDefault();
		let form = e.target;
		let accountName = form.accountName.value;
		let account= {
			followed_account: {
				platform: form.platform.value,
				account_name: accountName.split('@')[1] || accountName
			}
		}
		
		fetch('http://localhost:3001/v1/start_feed_lookup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset-utf-8',
				'X-User-Email': this.state.user.email,
				'X-User-Token': this.state.user.authentication_token
			},
			body: JSON.stringify(account)
		})
		.then(response => {
			if(response.ok){
				this.getPosts();
				
				return response.json();
			}
			throw Error(response.statusText);
		})
		.catch(error => {
			console.log(error);
		})
		form.accountName.value = '';
	}
	
  render() {
    return (
				<Router>
					<div>
						<NavBar signedUp={this.state.signedUp} signOut={this.signOut} isAuthenticated={this.state.authenticated} />
						<Route exact path="/" render={Header} />
						<Route exact path="/" component={(props) => (
								this.state.authenticated
								? <Redirect to={"/userpage"} />
								: <RegisterSection handleSignup={this.handleSignup} />
							) } />
						<Route exact path="/" render={(props) => <Features posts={this.state.posts} />} />
						<Route exact path="/" render={ActionCall} />
						<Route exact path="/" render={Social} />
						<Route exact path="/" render={Footer} />
						<Route exact path="/login" component={(props) => (
								this.state.authenticated
								? <Redirect to={"/userpage"} />
								: <Login handleLogin={this.handleLogin} />
							) } />
						<Route exact path="/userpage" render={(props) => (
								this.state.authenticated
								? <UserPage posts={this.state.posts} addAccount={this.addAccount} userPlatformInfo={this.state.userPlatformInfo} toggleUserMenu={this.toggleUserMenu} userMenu={this.state.userMenu} />
								: <Redirect to={"/login"} />
							) } />
						<Route exact path="/signout" render={() => (
								!this.state.authenticated
								? <Redirect to={"/"} />
							: <UserPage posts={this.state.posts} addAccount={this.addAccount} userPlatformInfo={this.state.userPlatformInfo} toggleUserMenu={this.toggleUserMenu} userMenu={this.state.userMenu} />
							) } />
						<Route exact path="/followed_account" render={FollowedAccount} />
					</div>
			</Router>
    );
  }
}

export default App;
