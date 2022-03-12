import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import BookmarkItem from './BookmarkItem'
import { getBookmarks } from './../../store/content'

function BookmarkContainer(props) {
	useEffect(() => {
		props.getBookmarks()
	}, [])

	console.log('here', props.bookmarks)

	return (
		<div>
			{props.bookmarks
				? props.bookmarks.map(bookmark => (
						<BookmarkItem key={bookmark.id} bookmarkData={bookmark} />
				  ))
				: null}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		bookmarks: state.content.byBookmarks.bookmarks
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getBookmarks: () => dispatch(getBookmarks())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkContainer)
