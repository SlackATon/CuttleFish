import React from 'react'

import Header from '../globals/Header'
import SectionOne from './SectionOne'
import Footer from '../globals/Footer'

function LandingPage() {
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

export default LandingPage
