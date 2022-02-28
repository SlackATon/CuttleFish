import React from 'react'
import { TiLink, TiEdit, TiTimes, TiPlus } from 'react-icons/ti'

class BookmarkItem extends React.Component {
	constructor() {
		super()
		this.state = {
			edit: false
		}
		this.ellipsis = this.ellipsis.bind(this)
		this.formatDate = this.formatDate.bind(this)
		this.handleControls = this.handleControls.bind(this)
		this.handleTags = this.handleTags.bind(this)
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

	handleTags() {
		if (this.props.bookmarkData.tags.length > 0) {
			return (
				<ul className="main__bookmark-icon-tags-ul">
					{this.props.bookmarkData.tags.map(tag => (
						<li className="main__bookmark-icon-tags-li">{tag.name}</li>
					))}
				</ul>
			)
		}
	}

	render() {
		console.log('.......', this.props.bookmarkData)
		return (
			<div className="main__bookmark">
				{/* <div className="main__bookmark-icon">g</div> */}

				<div className="main__bookmark-title">
					{this.props.bookmarkData.title
						? this.ellipsis(this.props.bookmarkData.title, 27)
						: ''}
				</div>

				<div className="main__bookmark-description">
					{this.props.bookmarkData.description
						? this.ellipsis(this.props.bookmarkData.description, 70)
						: 'no description'}
				</div>

				<div className="main__bookmark-date">
					{this.formatDate(this.props.bookmarkData.createdAt)}
				</div>

				<div className="main__bookmark-controls-wrapper">
					<div className="main__bookmark-icon-wrapper">
						<a
							target="_blank"
							href={this.props.bookmarkData.url}
							className="main__bookmark-icon">
							<TiLink />
						</a>

						{/* <div className="main__bookmark-icon-tags main__bookmark-icon-hidden"></div> */}
					</div>

					<div className="main__bookmark-icon-wrapper">
						<div
							className="main__bookmark-icon"
							onClick={() => this.handleControls('edit')}>
							<TiEdit />
						</div>

						{this.state.edit ? (
							<div className="main__bookmark-icon-tags main__bookmark-icon-hidden">
								{this.handleTags()}
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
							</div>
						) : (
							' '
						)}
					</div>

					<div className="main__bookmark-icon-wrapper">
						<div className="main__bookmark-icon">
							<TiTimes />
						</div>
						{/* <div className="main__bookmark-icon-tags main__bookmark-icon-hidden"></div> */}
					</div>
				</div>
			</div>
		)
	}
}

export default BookmarkItem
