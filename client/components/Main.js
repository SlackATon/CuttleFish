import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'
import BookmarkContainer from './Bookmark/BookmarkContainer'

function Main() {
	return (
		<div className="grid">
			<Sidebar />
			<div class="main">
				<Toolbar />
				<BookmarkContainer />
			</div>
		</div>
	)
}

export default Main
