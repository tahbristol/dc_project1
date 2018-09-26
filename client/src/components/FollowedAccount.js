import React from 'react';


const FollowedAccount = ({accountInfo}) => {
	return (
		<div>
			{accountInfo.map((account, idx) => {
				return(
					<div className="card followedAccount">
						<div className="card-body">
							
							<div className="accountInfo">
								<p className="accountName">@{account.accountName}</p>
							</div>
							
							<div className="accountInfo">
								<p className="postCounts">{account.numPosts}</p>
								<h6 className="card-title">Posts</h6>
							</div>
							
							<div className="accountInfo icon">
								<i className="fa fa-twitter-square fa-4x"></i>
							</div>
							
						</div>
					</div>
				)})}
		</div>
	)
}

export default FollowedAccount;