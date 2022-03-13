import React from 'react'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { connect } from 'react-redux'

import { resetState } from '../../../store/auth'

class SidebarControls extends React.Component {
	constructor() {
		super()

		this.handleSignout = this.handleSignout.bind(this)
	}

	handleSignout() {
		this.props.resetState()
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
					<button
						onClick={this.handleSignout}
						className="sidebar-settings__btn"
						type="button">
						<FiLogOut /> Signout
					</button>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		resetState: () => dispatch(resetState(history))
	}
}

export default connect(null, mapDispatchToProps)(SidebarControls)
