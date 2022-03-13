import React from 'react'

import SidebarUser from './SidebarUser'
import SidebarSearch from './SidebarSearch'
import SidebarTagContainer from './SidebarTagContainer'
import SidebarControls from './SidebarControls'

function Sidebar(props) {
	return (
		<div className="sidebar">
			<img className="sidebar__logo" src="logo.svg" alt="brand logo" />
			<SidebarUser />
			<SidebarSearch />
			<SidebarControls history={props.history} />
			<SidebarTagContainer />
		</div>
	)
}

export default Sidebar
