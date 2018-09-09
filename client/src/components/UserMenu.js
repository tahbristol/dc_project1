import React, { Component } from 'react';
import profileImage from '../images/TylerNIH.jpg';

const UserMenu = () => {
	return(
		<div className="myCard userMenu">
			<div className="card-body">
				<div className="profileHeading">
					<h5 className="card-title">User Email</h5>
					<img id="profileImage" src={profileImage} alt="profile picture"></img>
				</div>
				
				<div className="menuTabs">
					Tracked Platforms
				</div>
				
				<div className="menuTabs">
					Tracked Accounts
				</div>
				
				<div className="menuTabs">
					Add Tracked Accounts
				</div>
				
				<div className="menuTabs">
					Posts
				</div>
				
			</div>
		</div>
	)
}

export default UserMenu;