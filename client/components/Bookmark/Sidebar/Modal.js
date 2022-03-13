import React from 'react'
import { CgClose } from 'react-icons/cg'
import ModalTheme from './ModalTheme'

class Modal extends React.Component {
	render() {
		return (
			<dialog className="sidebar-controls-modal-wrapper" open>
				<div className="sidebar-controls-modal">
					<h3 className="sidebar-modal__h3">Change Theme</h3>
					<button className="sidebar-modal-close" type="button">
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

export default Modal
