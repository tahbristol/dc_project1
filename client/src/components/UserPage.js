import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './Navbar';
import Post from './Post';
import UserMenu from './UserMenu';
import Platform from './Platform';

const UserPage = ({posts, toggleUserMenu}) => {
		return(
			<Container fluid className="userPage">
				<Row>
					<div className="marTop200"></div>
				</Row>
				<Row>
					<Col md="3">
						<UserMenu toggleUserMenu={toggleUserMenu}/>
					</Col>
					<Col md="9">
						<Post posts={posts} />
					</Col>
					<Col>
					
					</Col>
					<Col>
					
					</Col>
				</Row>
			</Container>
		)
	}

export default UserPage;