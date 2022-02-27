import React from 'react'

import SidebarTagBookmark from './SidebarTagBookmark'

class SidebarTag extends React.Component {
	constructor(props) {
		super(props)
		this.state = { toggle: false }
		this.handleState = this.handleState.bind(this)
		this.handleBookmarks = this.handleBookmarks.bind(this)
	}

	handleState() {
		this.setState(prvState => ({ toggle: !prvState.toggle }))
	}

	handleBookmarks() {
		if (this.state.toggle) {
			return (
				<ul className="sidebar__bookmark-ul">
					{this.props.tagData.bookmarks.map(bookmark => (
						<SidebarTagBookmark key={bookmark.id} tagBookmarks={bookmark} />
					))}
				</ul>
			)
		} else {
			return ''
		}
	}

	render() {
		return (
			<li
				onClick={this.handleState}
				name={this.props.tagData.id}
				className="sidebar__tag-li">
				<div className="sidebar__tag-inner">
					<div className="sidebar__tag-icon">🍭</div>
					<div className="sidebar__tag-link" href="#">
						{'#' + this.props.tagData.name}
					</div>
					<button className="sidebar__tag-count">
						{this.props.tagData.bookmarks.length}
					</button>
				</div>

				{this.handleBookmarks()}
			</li>
		)
	}
}

export default SidebarTag
