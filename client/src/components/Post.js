import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

class Post extends Component {
	constructor(props){
		super(props)
		this.state = {
			posts:[]
		}
		this.getPosts()
	}
	
	handleMarkAsRead = (e) => {
		let postId = e.target.parentElement.getAttribute('postid');
		this.props.markAsRead(postId);
	}
	
	postTime = (timestamp) => {
		return new Date(timestamp).toLocaleTimeString();
	}
	
	postDate = (timestamp) => {
		return new Date(timestamp).toLocaleDateString();
	}
	
	getPosts = ()=>{
		
		fetch('/v1/posts', 
		{
			headers: {
				'X-User-Email': this.props.user.email,
				'X-User-Token': this.props.user.authentication_token
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

	render(){
		{if(!this.state.posts.length){
			
			return(
				<div className="card post noPosts">
					<i className="fab fa-twitter-square fa-3x" aria-hidden="true"></i>
					<div className="card-body">
						There are currently no posts. Try adding an account to follow.
					</div>
				</div>
			)
		}}
		return(
			<Masonry className="postContainer">
				{this.state.posts.map((post, idx) => {
					console.log(post)
					return(
						<div className="card post" key={idx}>
							<i className="fab fa-twitter-square fa-3x" aria-hidden="true"></i>
							<p className="postTimestamp">{this.postDate(post.timestamp) + "-" + this.postTime(post.timestamp)}</p>
							<div className="card-body">
								<h5 className="card-title">@{post.author}</h5>
								<p className="card-text">{post.content}</p>
							</div>
							<div id="postIcons">
								<ul>
									{/*<li><i className="fa fa-retweet fa-2x" aria-hidden="true"></i><br /><small>retweet</small></li>*/}
									<li onClick={this.handleMarkAsRead} postid={post.id}><i className="fa fa-check fa-2x" aria-hidden="true"></i><br /><small>mark as read</small></li><br />
									<li><a href={post.source_url} target="_blank">Go to tweet</a></li>
							</ul>
							</div>
						</div>
					)})}
			</Masonry>
		)
	}
}

export default Post;