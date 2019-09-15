import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import RegisterSection from './components/RegisterSection';
import Features from './components/Features';
import ActionCall from './components/ActionCall';
import Social from './components/Social';
import Footer from './components/Footer';
import Login from './components/Login';
import './css/App.css';

class App extends React.Component {
	constructor(props){
		super(props)
		
		
		this.state = {
			user: {},
			isAuth: false
		}
	}
	
	render(){
		return (
			<div className="mainContainer">
				<Nav />
				<Router>
					<Route exact path="/" render={Header} />
					<Route exact path="/" render={RegisterSection} />
					<Route exact path="/" render={Features} />
					<Route exact path="/" render={ActionCall} />
					<Route exact path="/" render={Social} />
					<Route exact path="/" render={Footer} />
					<Route exact path="/login" render={Login} />
					
				</Router>
			</div>
		);
	}
}

export default App;
