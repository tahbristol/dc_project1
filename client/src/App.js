import React, { Component } from 'react';
import Post from './components/Post';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <Post posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
