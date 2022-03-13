import React from 'react'

import AuthLeft from './AuthLeft'
import AuthRight from './AuthRight'
import Footer from '../LandingPage/Footer'
import Header from '../LandingPage/Header'

function Auth(props) {
	return (
		<div className="auth__container">
			<Header />
			<div className="auth">
				<AuthLeft />
				<AuthRight history={props.history} />
			</div>
			<Footer />
		</div>
	)
}

export default Auth
