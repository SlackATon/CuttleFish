import React from 'react'

import SidebarTagBookmark from './SidebarTagBookmark'

function SidebarTag() {
	return (
		<li className="sidebar__tag-li">
			<div className="sidebar__tag-inner">
				<div className="sidebar__tag-icon">🍭</div>
				<div className="sidebar__tag-link" href="#">
					Chocolate Websites
				</div>
				<button className="sidebar__tag-count">5</button>
			</div>

			<ul className="sidebar__bookmark-ul">
				<SidebarTagBookmark />
			</ul>
		</li>
	)
}

export default SidebarTag
