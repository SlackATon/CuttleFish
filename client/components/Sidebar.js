import React from 'react'

import SidebarUser from './SidebarUser'
import SidebarSearch from './SidebarSearch'

function Sidebar() {
	return (
		<div className="sidebar">
			<h1 className="sidebar__title">Bookmark Tracker</h1>
			<SidebarUser />
			<SidebarSearch />
		</div>
	)
}

export default Sidebar
