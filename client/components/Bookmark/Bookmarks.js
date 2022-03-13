import React from 'react'
import { connect } from 'react-redux'

import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'
import BookmarkContainer from './BookmarkContainer'

import { checkToken } from '../../store/auth'

class Bookmarks extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		this.props.checkToken()
	}

	componentDidUpdate() {
		this.props.checkToken()
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

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		checkToken: () => dispatch(checkToken(history))
	}
}
export default connect(null, mapDispatchToProps)(Bookmarks)
