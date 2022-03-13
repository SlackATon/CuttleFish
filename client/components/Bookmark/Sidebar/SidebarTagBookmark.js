import React from 'react'
import { connect } from 'react-redux'

function SidebarTagBookmark(props) {
	return (
		<li className="sidebar__bookmark-li">
			<div className="sidebar__bookmark-title">
				{props.ellipsis ? props.ellipsis(props.bookmarkDetails.title, 11) : null}
			</div>
			<div className="sidebar__bookmark-description">
				{props.ellipsis
					? props.ellipsis(props.bookmarkDetails.description, 20)
					: null}
			</div>
		</li>
	)
}

const mapStateToProps = state => {
	return {
		ellipsis: state.helper.ellipsis
	}
}

export default connect(mapStateToProps)(SidebarTagBookmark)
