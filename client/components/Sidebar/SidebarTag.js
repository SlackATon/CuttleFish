import React from 'react'

import SidebarTagBookmark from './SidebarTagBookmark'

function SidebarTag(props) {
	// console.log(props.bookmarks)
	return (
		<li className="sidebar__tag-li">
			<div className="sidebar__tag-inner">
				<div className="sidebar__tag-icon">🍭</div>
				<div className="sidebar__tag-link" href="#">
					{'#' + props.name}
				</div>
				<button className="sidebar__tag-count">{props.bookmarks.length}</button>
			</div>

			<ul className="sidebar__bookmark-ul">
				{props.bookmarks.map(bookmark => (
					<SidebarTagBookmark
						key={bookmark.id}
						title={bookmark.title}
						description={bookmark.description}
					/>
				))}
			</ul>
		</li>
	)
}

export default SidebarTag
