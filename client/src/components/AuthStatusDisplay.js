import React from 'react';

const AuthStatusDisplay = ({showAuthFail, showAuthSuccess, showSignupSuccess, user}) => {
	return(
		<div>
			<p className={showAuthFail ? "authFail" : '' + "hide"} >
				The email or password could not be verified. Please try again.
			</p>
			
			<p className={showAuthSuccess ? "authSuccess" : '' + "hide"}>
				 Successful login.
			</p>
			
			<p className={showSignupSuccess ? "authSuccess" : '' + "hide"}>
				We'll send you an email. Please confirm to get started.
			</p>
		</div>
	)
}

export default AuthStatusDisplay;