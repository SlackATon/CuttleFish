import React from 'react'
import { connect } from 'react-redux'
import { TiLink, TiEdit, TiTimes, TiPlus } from 'react-icons/ti'
import { HiHashtag } from 'react-icons/hi'

import { _getEllipsis, _getDateFormatter } from './../../store/helper'
import { deleteBookmark } from './../../store/content'

class BookmarkItem extends React.Component {
	constructor() {
		super()
		this.state = {
			edit: false
		}

		this.handleControls = this.handleControls.bind(this)
		this.handleCurrentTags = this.handleCurrentTags.bind(this)
		this.handleAddedTags = this.handleAddedTags.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	componentDidMount() {
		this.props.getEllipsis()
		this.props.getDataFormatter()
	}

	handleControls(type) {
		if (type === 'edit') {
			this.setState(prvState => ({
				edit: !prvState.edit
			}))
		}
	}

	/* Will display the current tags for that bookmark. */
	handleCurrentTags() {
		return (
			<ul className="main__bookmark-icon-tags-ul">
				{this.props.bookmarkData.tags.map(tag => (
					<li key={tag.id} className="main__bookmark-icon-tags-li">
						<div className="main__bookmark-icon-tags-li-hastag">
							<HiHashtag />
						</div>
						{tag.name}
					</li>
				))}
			</ul>
		)
	}

	/* Will display previos tags as suggestions. */
	handleAddedTags() {
		return (
			<div>
				<ul className="main__bookmark-icon-tags-ul main__bookmark-icon-search-tags-ul">
					<li className="main__bookmark-icon-tags-li">
						<div className="main__bookmark-icon-tags-li-hastag">
							<HiHashtag />
						</div>
						git-resource
					</li>
				</ul>
			</div>
		)
	}

	handleDelete() {
		this.props.deleteBookmark(this.props.bookmarkData.id)
	}

	render() {
		return (
			<div className="main__bookmark">
				<div className="main__bookmark-title">
					{this.props.bookmarkData.title && this.props.ellipsis
						? this.props.ellipsis(this.props.bookmarkData.title, 27)
						: ''}
				</div>

				<div className="main__bookmark-description">
					{this.props.bookmarkData.description && this.props.ellipsis
						? this.props.ellipsis(this.props.bookmarkData.description, 70)
						: 'no description'}
				</div>

				<div className="main__bookmark-date">
					{this.props.bookmarkData.createdAt && this.props.dateFormatter
						? this.props.dateFormatter(this.props.bookmarkData.createdAt)
						: null}
				</div>

				<div className="main__bookmark-controls-wrapper">
					<div className="main__bookmark-icon-wrapper">
						<a
							target="_blank"
							href={this.props.bookmarkData.url}
							className="main__bookmark-icon">
							<TiLink />
						</a>
					</div>

					<div className="main__bookmark-icon-wrapper">
						<div
							className="main__bookmark-icon"
							onClick={() => this.handleControls('edit')}>
							<TiEdit />
						</div>

						{this.state.edit ? (
							<div className="main__bookmark-icon-tags main__bookmark-icon-hidden">
								{this.handleCurrentTags()}
								<form className="main__bookmark-icon-tags-form">
									<input
										className="main__bookmark-icon-tags-text"
										type="text"
									/>
									<button
										type="submit"
										className="main__bookmark-icon-tags-btn">
										<TiPlus />
									</button>
								</form>

								{this.handleAddedTags()}
							</div>
						) : null}
					</div>

					<div
						onClick={this.handleDelete}
						className="main__bookmark-icon-wrapper">
						<div className="main__bookmark-icon">
							<TiTimes />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		ellipsis: state.helper.ellipsis,
		dateFormatter: state.helper.dateFormatter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getEllipsis: () => dispatch(_getEllipsis()),
		getDataFormatter: () => dispatch(_getDateFormatter()),
		deleteBookmark: id => dispatch(deleteBookmark(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkItem)
