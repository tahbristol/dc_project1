import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const Post = ({posts}) => {	
	{if(posts.length){
	 	return(
			<Masonry className="postContainer">
				{posts && posts.map((post, idx) => {
					return(
						<div className="card post" key={idx}>
							<i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
							<div className="card-body">
								<h5 className="card-title">@{post.author}</h5>
								<p className="card-text">{post.content}</p>
							</div>
							<div id="postIcons">
								<ul>
									{/*<li><i className="fa fa-retweet fa-2x" aria-hidden="true"></i><br /><small>retweet</small></li>*/}		
									<li><i className="fa fa-check fa-2x" aria-hidden="true"></i><br /><small>mark as read</small></li>
								</ul>
							</div>
						</div>
					)
				})}
			</Masonry>
		)	
	}
	else {
		return(
			<Masonry className="postContainer">
				<div></div>
			</Masonry>
		)
	}}
}

export default Post;