import React from 'react'

function SidebarTagBookmark(props) {
	const ellipsis = (str, chars) =>
		str.length >= chars ? str.slice(0, chars) + '...' : str

	return (
		<li className="sidebar__bookmark-li">
			<div className="sidebar__bookmark-title">
				{ellipsis(props.tagBookmarks.title, 14)}
			</div>
			<div className="sidebar__bookmark-description">
				{props.tagBookmarks.description
					? ellipsis(props.tagBookmarks.description, 27)
					: ''}
			</div>
		</li>
	)
}

export default SidebarTagBookmark
