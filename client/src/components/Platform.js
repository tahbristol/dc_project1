import React, { Component } from 'react';

class Platform extends Component {
	render(){
		return(
			<div className="card platform">
				<div className="card-body">
					<div className="platformInfo icon">
						<i className="fa fa-twitter-square fa-4x"></i>
					</div>
					<div className="platformInfo">
						<p className="platformCounts">{this.props.userPlatformInfo.numFollowedAccounts}</p>
						<h6 className="card-title">Followed Accounts</h6>
					</div>
					<div className="platformInfo">
						<p className="platformCounts">{this.props.userPlatformInfo.numPosts}</p>
						<h6 className="card-title">Un-Read Posts</h6>
					</div>
				</div>
			</div>
		)
	}
}

export default Platform;