import React from 'react'
import { MdLanguage } from 'react-icons/md'

function Header() {
	return (
		<header className="landingPage-header">
			<img className="landingPage-header-logo" src="logo.svg" alt="brand logo" />

			<div className="landingPage-language__wrapper">
				<div className="landingPage__current-language-wrapper">
					<div className="landingPage__current-icon">
						<MdLanguage />
					</div>
					<div className="landingPage__current-language">English</div>
				</div>
			</div>
		</header>
	)
}

export default Header
