import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './Navbar';
import Post from './Post';
import UserMenu from './UserMenu';
import Platform from './Platform';
import AddAccount from './AddAccount';
import FollowedAccount from './FollowedAccount';
import AuthStatusDisplay from './AuthStatusDisplay';

const UserPage = ({showAuthSuccess,  toggleUserMenu, user, userMenu, userPlatformInfo, addAccount, followedAccountsInfo, deleteFollowedAccount, markAsRead, deleteUserAccount}) => {
		return(
			<Container fluid className="userPage">
				<Row>
					<Col lg="12">
						<div className="marTop200"></div>
						<AuthStatusDisplay showAuthSuccess={showAuthSuccess} />
					</Col>
				</Row>
				<Row>
					<Col lg="3">
						<UserMenu user={user} toggleUserMenu={toggleUserMenu} deleteUserAccount={deleteUserAccount}/>
					</Col>
					<Col lg="9" className={userMenu.showPosts ? "show" : "hide"}>
						<Post user={user}  markAsRead={markAsRead}/>
					</Col>
					<Col lg="9" className={userMenu.showPlatforms ? "show" : "hide"}>
						<Platform userPlatformInfo={userPlatformInfo}/>
					</Col>
					<Col lg="9" className={userMenu.showFollowedAccounts ? "show" : "hide"}>
					<FollowedAccount deleteFollowedAccount={deleteFollowedAccount} accountInfo={followedAccountsInfo}/>
					</Col>
					<Col lg="9" className={userMenu.addAccount ? "show" : "hide"}>
						<AddAccount addAccount={addAccount}/>
					</Col>
				</Row>
			</Container>
		)
	}

export default UserPage;