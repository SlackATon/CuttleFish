import React from 'react'

import Header from './Header'
import SectionOne from './SectionOne'
import Footer from './Footer'

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
