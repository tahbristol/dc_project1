import React, { Component } from 'react';
class TokenLogin extends Component {
	constructor(props){
		super(props)
	}
  
  componentDidMount(){
    this.props.loginWithToken(this.props.match.params.token)
  }
	render(){
		return(
			<div>
      <p>hello</p>
			</div>
		)
	}
}

export default TokenLogin;