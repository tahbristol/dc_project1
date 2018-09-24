import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './Navbar';
import Post from './Post';
import UserMenu from './UserMenu';
import Platform from './Platform';
import AddAccount from './AddAccount';

const UserPage = ({posts, toggleUserMenu, userMenu, userPlatformInfo, addAccount}) => {
		return(
			<Container fluid className="userPage">
				<Row>
					<div className="marTop200"></div>
				</Row>
				<Row>
					<Col md="3">
						<UserMenu toggleUserMenu={toggleUserMenu}/>
					</Col>
					<Col md="9" className={userMenu.showPosts ? "show" : "hide"}>
						<Post posts={posts} />
					</Col>
					<Col md="9" className={userMenu.showPlatforms ? "show" : "hide"}>
						<Platform userPlatformInfo={userPlatformInfo}/>
					</Col>
					<Col md="9" className={userMenu.showFollowedAccounts ? "show" : "hide"}>
					<h1>Followed Accounts</h1>
					</Col>
					<Col md="9" className={userMenu.addAccount ? "show" : "hide"}>
						<AddAccount addAccount={addAccount}/>
					</Col>
				</Row>
			</Container>
		)
	}

export default UserPage;