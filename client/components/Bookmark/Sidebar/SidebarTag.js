import React from 'react'
import { HiHashtag } from 'react-icons/hi'

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
					{this.props.tagDetails.bookmarks.map(bookmark => (
						<SidebarTagBookmark
							key={bookmark.id}
							bookmarkDetails={bookmark}
						/>
					))}
				</ul>
			)
		}

		return ''
	}

	render() {
		return (
			<li
				onClick={this.handleState}
				name={this.props.tagDetails.id}
				className="sidebar__tag-li">
				<div className="sidebar__tag-inner">
					<div className="sidebar__tag-icon">🍭</div>
					<div className="sidebar__tag-link">
						<div className="sidebar__tag-hastag">
							<HiHashtag />
						</div>
						{this.props.tagDetails.name}
					</div>
					<button className="sidebar__tag-count">
						{this.props.tagDetails.bookmarks.length}
					</button>
				</div>

				{this.handleBookmarks()}
			</li>
		)
	}
}

export default SidebarTag
