import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './Navbar';
import Post from './Post';
import UserMenu from './UserMenu';

const UserPage = ({posts}) => {
		return(
			<Container fluid className="userPage">
				<Row>
					<div class="marTop200"></div>
				</Row>
				<Row>
					<Col md="3">
						<UserMenu />
					</Col>
					<Col md="9">
						<Post posts={posts} />
					</Col>
				</Row>
			</Container>
		)
	}

export default UserPage;