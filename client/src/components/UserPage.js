import React, { Component } from 'react';
import Post from './Post';

const UserPage = ({}) => {
	return(
		<div className="userPageContainer">
		<NavBar />
		<Post posts={this.props.posts} />
		</div>
	)
}

export default UserPage;