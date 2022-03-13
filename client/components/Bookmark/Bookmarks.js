import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'
import BookmarkContainer from './BookmarkContainer'

class Bookmarks extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="grid">
				<Sidebar history={this.props.history} />
				<div className="main">
					<Toolbar />
					<BookmarkContainer />
				</div>
			</div>
		)
	}
}

export default Bookmarks
