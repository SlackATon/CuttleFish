import React from 'react'
import { TiLink, TiEdit, TiTimes } from 'react-icons/ti'

function BookmarkItem(props) {
	const ellipsis = str => (str.length >= 35 ? str.slice(0, 35) + '...' : str)
	console.log('==================>>>>>>>', props.bookmarkData.description)
	return (
		<div className="main__bookmark">
			<div className="main__bookmark-icon">
				<img
					className="main__bookmark-icon-img"
					src="https://picsum.photos/40/40"
					alt=""
				/>
			</div>

			<div className="main__bookmark-title">{props.bookmarkData.title}</div>

			<div className="main__bookmark-description">
				{props.bookmarkData.description
					? ellipsis(props.bookmarkData.description)
					: 'no description'}
			</div>

			<div className="main__bookmark-date">mar 3rd 2020</div>

			<div className="main__bookmark-icon-wrapper">
				<div className="main__bookmark-icon">
					<TiLink />
				</div>
				<div className="main__bookmark-icon">
					<TiEdit />
				</div>
				<div className="main__bookmark-icon">
					<TiTimes />
				</div>
			</div>
		</div>
	)
}

export default BookmarkItem
