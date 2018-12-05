import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class FollowedAccount extends Component {
	constructor(props) {
		super(props)
	
	}
	
	handleDelete = (id) => {
		this.props.deleteFollowedAccount(id);
	}
	
	render(){
		return (
			<div>
				{this.props.accountInfo.map((account, idx) => {
					return(
						<div className="card followedAccount" key={idx} >
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
										<i onClick={this.handleDelete.bind(this, account.accountId)} className="fas fa-trash-alt fa-2x"></i>
									</Col>
								</Row>
							</Container>
						</div>
					)})}
			</div>
		)
	}
}

export default FollowedAccount;