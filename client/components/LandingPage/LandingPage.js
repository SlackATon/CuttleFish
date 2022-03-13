import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from '../globals/Header'
import SectionOne from './SectionOne'
import Footer from '../globals/Footer'

import { autoSignin } from '../../store/auth'

function LandingPage(props) {
	useEffect(() => {
		props.autoSignin()
	}, [])

	return (
		<div className="landingPage-container">
			<div className="landingPage">
				<Header />
				<SectionOne />
				<Footer />
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		autoSignin: () => dispatch(autoSignin(history))
	}
}

export default connect(null, mapDispatchToProps)(LandingPage)
