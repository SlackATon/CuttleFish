import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'
import BookmarkContainer from './Bookmark/BookmarkContainer'

class Main extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {}

	render() {
		return (
			<div className="grid">
				{/* <Sidebar />
			<div className="main">
				<Toolbar />
				<BookmarkContainer />
			</div> */}
				inside main
			</div>
		)
	}
}

export default Main
