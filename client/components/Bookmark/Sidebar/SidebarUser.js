import React, { useEffect } from 'react'
import { FiBookmark, FiHash } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'
import { connect } from 'react-redux'

import { getInfo } from './../../../store/user'
import { getBookmarks, getTags } from './../../../store/content'

function SidebarUser(props) {
	const handleBoomarks = () => {
		if (props.bookmarksTotal) {
			return (
				<div>
					<FiHash /> {props.bookmarksTotal + ' bookmarks'}
				</div>
			)
		}

		return 'No Bookmarks'
	}

	const handleTagsTotal = () => {
		if (props.tagsTotal) {
			return (
				<div>
					<FiBookmark /> {props.tagsTotal + ' tags'}
				</div>
			)
		}

		return 'No Tags'
	}

	useEffect(() => {
		props.getInfo()
		props.getBookmarks()
		props.getTags()
	}, [])

	return (
		<div className="sidebar__user">
			<div className="sidebar__user-right">
				<img className="sidebar__user-image" src={props.icon} alt="user icon" />
			</div>
			<div className="sidebar__user-left">
				<h3 className="sidebar__user-row sidebar__user-name">
					<MdAlternateEmail />
					{props.username}
				</h3>
				<div className="sidebar__user-row sidebar__user-bookmarks">
					{handleBoomarks()}
				</div>
				<div className="sidebar__user-row sidebar__user-tags">
					{handleTagsTotal()}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	const bookmarksTotal = state.content.byBookmarks.bookmarks
		? state.content.byBookmarks.bookmarks.length
		: 0

	const tagsTotal = state.content.byTags.tags ? state.content.byTags.tags.length : 0

	return {
		username: state.user.username,
		icon: state.user.icon,
		bookmarksTotal: bookmarksTotal,
		tagsTotal: tagsTotal
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getInfo: () => dispatch(getInfo()),
		getBookmarks: () => dispatch(getBookmarks()),
		getTags: () => dispatch(getTags())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarUser)
