import React from 'react'
import { connect } from 'react-redux'

import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'

class Bookmarks extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="grid">
				<Sidebar />
				<div className="main">
					<Toolbar />
					{/* <BookmarkContainer /> */}
				</div>
			</div>
		)
	}
}

export default Bookmarks
