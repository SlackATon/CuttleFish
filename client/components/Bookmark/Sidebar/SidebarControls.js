import React from 'react'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { connect } from 'react-redux'

import { resetState } from '../../../store/auth'
import { _showSidebarModal } from '../../../store/app'

import Modal from './Modal'

class SidebarControls extends React.Component {
	constructor() {
		super()

		this.handleSignout = this.handleSignout.bind(this)
		this.handleModal = this.handleModal.bind(this)
	}

	handleSignout() {
		this.props.resetState()
	}

	handleModal() {
		this.props.showSidebarModal()
	}

	render() {
		return (
			<div className="sidebar-settings">
				<div className="sidebar-settings-controls">
					<button
						onClick={this.handleModal}
						className="sidebar-settings__btn"
						type="button">
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

				{this.props.sidebarModal ? <Modal /> : null}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		sidebarModal: state.app.sidebarModal
	}
}

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		resetState: () => dispatch(resetState(history)),
		showSidebarModal: () => dispatch(_showSidebarModal())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarControls)
