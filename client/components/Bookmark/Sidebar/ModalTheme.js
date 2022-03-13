import React from 'react'
import { TiLink, TiEdit, TiTimes } from 'react-icons/ti'

function ModalThemeOne(props) {
	return (
		<div className={'sidebar-controls-group' + ` ${props.themeClass}`}>
			<div className="modal__bookmark">
				<div className="modal__bookmark-title">An Awesome Title</div>

				<div className="modal__bookmark-description">An Website Description</div>

				<div className="modal__bookmark-date">Mar 13 2022</div>

				<div className="modal__bookmark-controls-wrapper">
					<div className="modal__bookmark-icon-wrapper">
						<div className="modal__bookmark-icon">
							<TiLink />
						</div>
					</div>

					<div className="modal__bookmark-icon-wrapper">
						<div className="modal__bookmark-icon">
							<TiEdit />
						</div>
					</div>

					<div className="modal__bookmark-icon-wrapper">
						<div className="modal__bookmark-icon">
							<TiTimes />
						</div>
					</div>
				</div>
			</div>

			<div className="sidebar-controls__input-wrapper">
				<input
					type="radio"
					name="theme"
					id={props.themeTitle}
					value={props.themeTitle}
				/>
				<label htmlFor={props.themeTitle}>{props.themeTitle}</label>
			</div>
		</div>
	)
}

export default ModalThemeOne
