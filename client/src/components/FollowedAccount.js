import React from 'react';


const FollowedAccount = () => {
	return (
		<div>
				<div className="card followedAccount">
					<div className="card-body">
						
						<div className="accountInfo">
							<p className="accountName">@tahbristol</p>
						</div>
						
						<div className="accountInfo">
							<p className="postCounts">20</p>
							<h6 className="card-title">Posts</h6>
						</div>
						
						<div className="accountInfo icon">
							<i className="fa fa-twitter-square fa-4x"></i>
						</div>
						
					</div>
				</div>
		</div>
	)
}

export default FollowedAccount;