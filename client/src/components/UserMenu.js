import React, { Component } from 'react';
import profileImage from '../images/avatar1.png';

const UserMenu = ({toggleUserMenu, deleteUserAccount, user}) => {
	return(
		<div className="card userMenu">
			<div className="card-body">
				<div className="profileHeading">
					<h5 className="card-title">{user.email}</h5>
					<img id="profileImage" src={profileImage} alt="profile"></img>
				</div>
				
				<div className="menuTabs" id="Platforms" onClick={toggleUserMenu}>
					Platforms
				</div>
				
				<div className="menuTabs" id="Accounts" onClick={toggleUserMenu}>
					Following
				</div>
				
				<div className="menuTabs" id="Posts" onClick={toggleUserMenu}>
					Posts
				</div>
				
				<div className="menuTabs" id="addAccount" onClick={toggleUserMenu}>
					Add Account
				</div>
				
			</div>
			<small onClick={(e) => { if (window.confirm('Are you sure you wish to delete this account?')) deleteUserAccount()}} id="deleteUserAccount">Delete account?</small>
		</div>
	)
}

export default UserMenu;