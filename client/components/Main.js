import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'
import BookmarkContainer from './Bookmark/BookmarkContainer'

function Main() {
	return (
		<div className="grid">
			<Sidebar />
			<div className="main">
				<Toolbar />
				<BookmarkContainer />
			</div>
		</div>
	)
}

export default Main
