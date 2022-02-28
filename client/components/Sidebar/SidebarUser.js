import React from 'react'
import { FiBookmark, FiHash } from 'react-icons/fi'
import { connect } from 'react-redux'

function SidebarUser(props) {
	const bookmarkCount = () => {
		if (props.bookmarks.length) {
			return (
				<div>
					<FiHash /> {props.bookmarks.length + ' bookmarks'}
				</div>
			)
		} else {
			return 'no bookmarks'
		}
	}

	const tagCount = () => {
		if (props.tags.length) {
			return (
				<div>
					<FiBookmark /> {props.tags.length + ' tags'}
				</div>
			)
		} else {
			return 'no tags'
		}
	}

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
					{bookmarkCount()}
				</div>
				<div className="sidebar__user-row sidebar__user-tags">{tagCount()}</div>
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
