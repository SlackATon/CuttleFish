import React from 'react'
import { MdLanguage } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className="landingPage-header">
			<Link to="/">
				<img
					className="landingPage-header-logo"
					src="logo.svg"
					alt="brand logo"
				/>
			</Link>

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
