import React, { useEffect } from 'react'
import { FiBookmark, FiHash } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'
import { connect } from 'react-redux'

import { getBookmarks } from './../../../store/userBookmarks'

function SidebarUser(props) {
	const bookmarksCount = () => {
		if (props.bookmarks) {
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
		if (props.tags) {
			return (
				<div>
					<FiBookmark /> {props.tags.length + ' tags'}
				</div>
			)
		} else {
			return 'no tags'
		}
	}
	useEffect(() => {
		props.getBookmarks()
	}, [])
	console.log(props.icon)
	return (
		<div className="sidebar__user">
			<div className="sidebar__user-right">
				<img className="sidebar__user-image" src={props.icon} alt="" />
			</div>
			<div className="sidebar__user-left">
				<h3 className="sidebar__user-row sidebar__user-name">
					<MdAlternateEmail />
					{props.username}
				</h3>
				<div className="sidebar__user-row sidebar__user-bookmarks">
					{bookmarksCount()}
				</div>
				<div className="sidebar__user-row sidebar__user-tags">{tagCount()}</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		bookmarks: state.userBookmarks.bookmarks,
		tags: state.userBookmarks.tags,
		icon: state.userBookmarks.icon,
		username: state.userBookmarks.username
	}
}
const mapDispatchToProps = dispatch => ({ getBookmarks: () => dispatch(getBookmarks()) })

export default connect(mapStateToProps, mapDispatchToProps)(SidebarUser)
