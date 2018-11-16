import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const FollowedAccount = ({accountInfo, deleteFollowedAccount}) => {
	return (
		<div>
			{accountInfo.map((account, idx) => {
				return(
					<div className="card followedAccount" key={idx}>
						<Container>
							<Row>
								<Col>
									@{account.accountName}
								</Col>
								<Col>
									{account.numPosts}
								</Col>
								<Col>
									<i className="fab fa-twitter-square fa-4x"></i>
								</Col>
								<Col>
									<i onClick={deleteFollowedAccount} className="fas fa-trash-alt fa-2x"></i>
								</Col>
							</Row>
						</Container>
						{/*}<div className="card-body">
							
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
							
						</div>{*/}
					</div>
				)})}
		</div>
	)
}

export default FollowedAccount;