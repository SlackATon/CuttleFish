import React from 'react'

import BookmarkControls from './BookmarkControls'

function BookmarkItem() {
	return (
		<div className="main__bookmark">
			<div className="main__bookmark-icon">
				<img
					className="main__bookmark-icon-img"
					src="https://picsum.photos/40/40"
					alt=""
				/>
			</div>

			<div className="main__bookmark-title">Laughing Bacchus Winecellars</div>

			<div className="main__bookmark-description">
				Lorem ipsum dolor sit amet consectetur adipisicing.
			</div>

			<div className="main__bookmark-date">mar 3rd 2020</div>

			<div className="main__bookmark-icon-wrapper">
				<BookmarkControls />
				<BookmarkControls />
				<BookmarkControls />
			</div>
		</div>
	)
}

export default BookmarkItem
