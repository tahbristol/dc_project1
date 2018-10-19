import React from 'react';

const AuthStatusDisplay = ({showAuthFail, showAuthSuccess}) => {
	return(
		<div>
			<p className={showAuthFail ? "authFail" : '' + "hide"} >
				The email and password could not be verified. Please try again.
			</p>
			
			<p className={showAuthSuccess ? "authSuccess" : '' + "hide"}>
				Your email and password have been verified.
			</p>
		</div>
	)
}

export default AuthStatusDisplay;