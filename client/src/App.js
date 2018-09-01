import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Post from './components/Post';
import Signup from './components/Signup';
import NavBar from './components/Navbar';
import logo from './logo.svg';
import './App.css';
import './postCard.css';
import './signup.css';

class App extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			posts: []
		}
	}
	
	componentDidMount(){
		fetch('http://localhost:3001/v1/posts', 
			{
				method: 'GET',
				headers: {
					'X-User-Email': 'tahbristol@gmail.com',
					'X-User-Token': 'Utgb-N7qYyxEDU2Dq25k'
				}
			})
		.then(data => data.json())
		.then(jsonData => {
			this.setState({
				posts: jsonData
			})
		})
	}
	
  render() {
    return (
      <Router>
				<div>
					<Route exact path="/posts" 
						render={(props) => <Post posts={this.state.posts} />} />
					<Route exact path="/signup" render={Signup} />
					<Route exact path="/navbar" render={NavBar} />
				</div>
			</Router>
    );
  }
}

export default App;
