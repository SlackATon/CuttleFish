import React from 'react'
import { connect } from 'react-redux'

import BookmarkItem from './BookmarkItem'
import { getBookmarks } from '../../store/bookmarks'

class BookmarkContainer extends React.Component {
	componentDidMount() {
		this.props.requestBookmarks()
	}

	render() {
		console.log(this.props.bookmarks)
		return (
			<div>
				{this.props.bookmarks.map(bookmark => (
					<BookmarkItem key={bookmark.id} bookmarkData={bookmark} />
				))}
			</div>
		)
	}
}

const mapState = state => ({ bookmarks: state.bookmarks.all })
const mapDispatch = dispatch => ({ requestBookmarks: () => dispatch(getBookmarks()) })

export default connect(mapState, mapDispatch)(BookmarkContainer)
