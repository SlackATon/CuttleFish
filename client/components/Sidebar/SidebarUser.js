import React from 'react'
import { connect } from 'react-redux'

function SidebarUser(props) {
	console.log('+++++++', props.bookmarks)
	return (
		<div className="sidebar__user">
			<div className="sidebar__user-right">
				<img
					className="sidebar__user-image"
					src="https://picsum.photos/70/70"
					alt=""
				/>
			</div>
			<div className="sidebar__user-left">
				<h3 className="sidebar__user-row sidebar__user-name">Dean Hatch</h3>
				<div className="sidebar__user-row sidebar__user-bookmarks">
					{props.bookmarks.length
						? props.bookmarks.length + ' bookmarks'
						: 'no bookmarks'}
				</div>
				<div className="sidebar__user-row sidebar__user-tags">
					{props.tags.length ? props.tags.length + ' tags' : 'no tags'}
				</div>
			</div>
		</div>
	)
}

const mapState = state => {
	return {
		tags: state.tags.all,
		bookmarks: state.bookmarks.all
	}
}
export default connect(mapState)(SidebarUser)
