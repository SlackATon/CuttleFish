import React from 'react'

import SidebarUser from './SidebarUser'
// import SidebarSearch from './SidebarSearch'
// import SidebarTagContainer from './SidebarTagContainer'

function Sidebar() {
	return (
		<div className="sidebar">
			<h1 className="sidebar__title">Bookmark Tracker</h1>
			<SidebarUser />
			{/* <SidebarSearch /> */}
			{/* <SidebarTagContainer /> */}
		</div>
	)
}

export default Sidebar
