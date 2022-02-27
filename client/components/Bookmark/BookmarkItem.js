import React from 'react'
import { TiLink, TiEdit, TiTimes } from 'react-icons/ti'

function BookmarkItem(props) {
	const ellipsis = (str, chars) =>
		str.length >= chars ? str.slice(0, chars) + '...' : str

	const formatDate = timestamp => {
		const getDate = Date(timestamp).split(' ')

		const month = getDate[1]
		const date = getDate[2]
		const year = getDate[3]

		return `${month} ${date} ${year}`
	}

	console.log('==================>>>>>>>', props.bookmarkData.createdAt)
	return (
		<div className="main__bookmark">
			{/* <div className="main__bookmark-icon">g</div> */}

			<div className="main__bookmark-title">
				{props.bookmarkData.title ? ellipsis(props.bookmarkData.title, 27) : ''}
			</div>

			<div className="main__bookmark-description">
				{props.bookmarkData.description
					? ellipsis(props.bookmarkData.description, 70)
					: 'no description'}
			</div>

			<div className="main__bookmark-date">
				{formatDate(props.bookmarkData.createdAt)}
			</div>

			<div className="main__bookmark-icon-wrapper">
				<a
					target="_blank"
					href={props.bookmarkData.url}
					className="main__bookmark-icon">
					<TiLink />
				</a>
				<div href="" className="main__bookmark-icon">
					<TiEdit />
				</div>
				<div href="" className="main__bookmark-icon">
					<TiTimes />
				</div>
			</div>
		</div>
	)
}

export default BookmarkItem
