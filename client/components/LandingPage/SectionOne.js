import React from 'react'
import { Link } from 'react-router-dom'

function SectionOne() {
	return (
		<section className="landingPage-one">
			<div className="landingPage-info">
				<h2 className="landingPage-one__h2">
					Keep your bookmarks in one place across devices.
				</h2>
				<h2 className="landingPage-one__h3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
					ullam iusto amet!
				</h2>

				<button className="landingPage-btn btn" type="buttton">
					<Link to="/signin">Get Started</Link>
				</button>
			</div>
		</section>
	)
}

export default SectionOne
