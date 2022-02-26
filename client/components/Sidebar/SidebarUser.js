import React from 'react'

function SidebarUser() {
	return (
		<div className="sidebar__user">
			<div className="sidebar__user-right">
				<img
					className="sidebar__user-image"
					src="https://picsum.photos/70/70"
					alt=""
				/>
			</div>
			<div className="sidebar__user-left">
				<h3 className="sidebar__user-row sidebar__user-name">Dean Hatch</h3>
				<div className="sidebar__user-row sidebar__user-bookmarks">
					10 bookmarks
				</div>
				<div className="sidebar__user-row sidebar__user-tags">12 tags</div>
			</div>
		</div>
	)
}

export default SidebarUser
