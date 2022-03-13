import React from 'react'

import SidebarUser from './SidebarUser'
import SidebarSearch from './SidebarSearch'
import SidebarTagContainer from './SidebarTagContainer'

function Sidebar() {
	return (
		<div className="sidebar">
			<img className="sidebar__logo" src="logo.svg" alt="brand logo" />
			<SidebarUser />
			<SidebarSearch />
			<SidebarTagContainer />
		</div>
	)
}

export default Sidebar
