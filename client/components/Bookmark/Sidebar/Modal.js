import React from 'react'
import { CgClose } from 'react-icons/cg'
import ModalTheme from './ModalTheme'

import { connect } from 'react-redux'
import { _hideSidebarModal } from '../../../store/app'

class Modal extends React.Component {
	constructor() {
		super()
		this.handleModal = this.handleModal.bind(this)
	}

	handleModal() {
		this.props.hideSidebarModal()
	}
	render() {
		return (
			<dialog className="sidebar-controls-modal-wrapper" open>
				<div className="sidebar-controls-modal">
					<h3 className="sidebar-modal__h3">Change Theme</h3>
					<button
						onClick={this.handleModal}
						className="sidebar-modal-close"
						type="button">
						<CgClose />
					</button>

					<ModalTheme
						themeTitle="Default"
						themeClass="sidebar-controls-group__one"
					/>
					<ModalTheme
						themeTitle="Light"
						themeClass="sidebar-controls-group__two"
					/>
					<ModalTheme
						themeTitle="Dark"
						themeClass="sidebar-controls-group__three"
					/>

					<ModalTheme
						themeTitle="Forest"
						themeClass="sidebar-controls-group__four"
					/>
				</div>
			</dialog>
		)
	}
}

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		hideSidebarModal: () => dispatch(_hideSidebarModal())
	}
}

export default connect(null, mapDispatchToProps)(Modal)
