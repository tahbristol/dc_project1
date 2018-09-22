import React, { Component } from 'react';
import profileImage from '../images/avatar1.png';

const UserMenu = ({toggleUserMenu}) => {
	return(
		<div className="card userMenu">
			<div className="card-body">
				<div className="profileHeading">
					<h5 className="card-title">User Email</h5>
					<img id="profileImage" src={profileImage} alt="profile picture"></img>
				</div>
				
				<div className="menuTabs" id="Platforms" onClick={toggleUserMenu}>
					Tracked Platforms
				</div>
				
				<div className="menuTabs" id="Accounts" onClick={toggleUserMenu}>
					Tracked Accounts
				</div>
				
				<div className="menuTabs" id="Posts" onClick={toggleUserMenu}>
					Posts
				</div>
				
			</div>
		</div>
	)
}

export default UserMenu;