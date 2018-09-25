import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './Navbar';
import Post from './Post';
import UserMenu from './UserMenu';
import Platform from './Platform';
import AddAccount from './AddAccount';
import FollowedAccount from './FollowedAccount';

const UserPage = ({posts, toggleUserMenu, userMenu, userPlatformInfo, addAccount}) => {
		return(
			<Container fluid className="userPage">
				<Row>
					<Col lg="12">
						<div className="marTop200"></div>
					</Col>
				</Row>
				<Row>
					<Col lg="3">
						<UserMenu toggleUserMenu={toggleUserMenu}/>
					</Col>
					<Col lg="9" className={userMenu.showPosts ? "show" : "hide"}>
						<Post posts={posts} />
					</Col>
					<Col lg="9" className={userMenu.showPlatforms ? "show" : "hide"}>
						<Platform userPlatformInfo={userPlatformInfo}/>
					</Col>
					<Col lg="9" className={userMenu.showFollowedAccounts ? "show" : "hide"}>
					<FollowedAccount />
					</Col>
					<Col lg="9" className={userMenu.addAccount ? "show" : "hide"}>
						<AddAccount addAccount={addAccount}/>
					</Col>
				</Row>
			</Container>
		)
	}

export default UserPage;