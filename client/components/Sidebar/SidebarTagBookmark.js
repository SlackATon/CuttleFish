import React from 'react'

function SidebarTagBookmark(props) {
	const ellipsis = str => (str.length >= 35 ? str.slice(0, 35) + '...' : str)

	return (
		<li className="sidebar__bookmark-li">
			<div className="sidebar__bookmark-title">{props.tagBookmarks.title}</div>
			<div className="sidebar__bookmark-description">
				{ellipsis(props.tagBookmarks.description)}
			</div>
		</li>
	)
}

export default SidebarTagBookmark
