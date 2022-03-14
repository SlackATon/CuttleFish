import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className="landingPage-footer">
			<div className="landingPage-footer__brand">
				<Link to="/">
					<img
						className="landingPage-footer__brand-logo"
						src="logo.svg"
						alt="footer brand logo"
					/>
				</Link>
				<div className="landingPage-footer__copyright">@ 2022</div>
			</div>

			<div className="landingPage-footer__contact">
				<div className="landingPage-footer__contact-heading">Contact</div>
				<div className="landingPage-footer__contact-desc">
					Have a bug to report, a feature request, or general comments?
				</div>

				<div className="landingPage-footer__contact-email">
					<a href="mailto:hello@cuttlefish.com?subject=General%20Comments">
						hello@cuttlefish.com
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
