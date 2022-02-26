import React from 'react'

function Toolbar() {
	return (
		<div className="main__top-bar">
			<div className="main__top-bar-icon">🍬</div>
			<h3 className="main__top-bar-name">News & Social</h3>

			<div className="main__top-bar-advance-controls">
				<button
					handleClick=""
					className="main__top-bar-btn main__top-bar-btn-advance">
					...
				</button>

				<div className="main__top-bar-advance-inner-controls main__top-bar-advance-inner-controls--hidden">
					<button className="main__top-bar-advance-inner-controls-btn">
						Delete all
					</button>
					<button className="main__top-bar-advance-inner-controls-btn">
						Untag all
					</button>
				</div>
			</div>
		</div>
	)
}

export default Toolbar
