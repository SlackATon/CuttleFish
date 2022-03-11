import React from 'react'

import AuthLeft from './AuthLeft'
import AuthRight from './AuthRight'

function Auth(props) {
	return (
		<div className="auth">
			<AuthLeft />
			<AuthRight history={props.history} />
		</div>
	)
}

export default Auth
