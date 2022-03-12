import React from 'react'
import { connect } from 'react-redux'

import Sidebar from './Sidebar/Sidebar'

class Bookmarks extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="grid">
				<Sidebar />
			</div>
		)
	}
}

export default Bookmarks
