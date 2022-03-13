import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'

function Toolbar() {
	return (
		<div className="main__top-bar">
			<div className="main__top-bar-left">
				{/* <div className="main__top-bar-icon">🍬</div> */}
				<h3 className="main__top-bar-name">News & Social</h3>
			</div>

			<div className="main__top-bar-right">
				<form className="main__topbar-right-input-form">
					<div className="main__topbar-right-input-form-icon">
						<AiOutlineLink />
					</div>

					<input
						className="main__topbar-right-input"
						placeholder="Enter URL"
						type="text"
					/>
					<button type="submit" className="main__top-bar-submit">
						Add
					</button>
				</form>
				<div className="main__top-bar-button-wrapper">
					<button className="main__top-bar-button">Untag All</button>
					<button className="main__top-bar-button">Delete All</button>
				</div>
			</div>
		</div>
	)
}

export default Toolbar
