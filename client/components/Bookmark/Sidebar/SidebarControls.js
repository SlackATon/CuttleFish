import React from 'react'
import { FiSettings, FiLogOut } from 'react-icons/fi'

class SidebarControls extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="sidebar-settings">
				<div className="sidebar-settings-controls">
					<button className="sidebar-settings__btn" type="button">
						<FiSettings /> Controls
					</button>
				</div>
				<div className="sidebar-settings-signout">
					<button className="sidebar-settings__btn" type="button">
						<FiLogOut /> Signout
					</button>
				</div>
			</div>
		)
	}
}

export default SidebarControls
