import React from 'react'
import { TiLink, TiEdit, TiTimes, TiPlus } from 'react-icons/ti'
import { HiHashtag } from 'react-icons/hi'

class BookmarkItem extends React.Component {
	constructor() {
		super()
		this.state = {
			edit: false
		}
		this.ellipsis = this.ellipsis.bind(this)
		this.formatDate = this.formatDate.bind(this)
		this.handleControls = this.handleControls.bind(this)
		this.handleCurrentTags = this.handleCurrentTags.bind(this)
		this.handleAddedTags = this.handleAddedTags.bind(this)
	}

	ellipsis(str, chars) {
		return str.length >= chars ? str.slice(0, chars) + '...' : str
	}

	formatDate(timestamp) {
		const getDate = Date(timestamp).split(' ')

		const month = getDate[1]
		const date = getDate[2]
		const year = getDate[3]

		return `${month} ${date} ${year}`
	}

	handleControls(type) {
		const edit = 'edit'

		if (type === edit) {
			this.setState(prvState => ({
				edit: !prvState.edit
			}))
		}
	}

	handleCurrentTags() {
		return (
			<ul className="main__bookmark-icon-tags-ul">
				{this.props.bookmarkData.tags.map(tag => (
					<li className="main__bookmark-icon-tags-li">
						<div className="main__bookmark-icon-tags-li-hastag">
							<HiHashtag />
						</div>
						{tag.name}
					</li>
				))}
			</ul>
		)
	}

	handleAddedTags() {
		return (
			<div>
				<ul className="main__bookmark-icon-tags-ul main__bookmark-icon-search-tags-ul">
					{this.props.bookmarkData.tags.map(tag => (
						<li className="main__bookmark-icon-tags-li">
							<div className="main__bookmark-icon-tags-li-hastag">
								<HiHashtag />
							</div>
							git-resource
						</li>
					))}
				</ul>
			</div>
		)
	}

	render() {
		return <div className="main__bookmark">Title</div>
	}
}

export default BookmarkItem
