import React from 'react'
import { connect } from 'react-redux'

import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'
import BookmarkContainer from './BookmarkContainer'

import { checkToken } from '../../store/auth'
import { getTheme } from '../../store/app'

class Bookmarks extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		this.props.checkToken()
		this.props.getTheme()
	}

	componentDidUpdate() {
		this.props.checkToken()

		//! TOFIX: IDEK
		if (this.props.theme === 'Light') {
			document.documentElement.style.setProperty('--clr-dark', '#111111')
			document.documentElement.style.setProperty('--clr-dark-accent', '#5f5f5f')
			document.documentElement.style.setProperty('--clr-dark-light', '#1c1c1c')
			document.documentElement.style.setProperty('--clr-light', '#fdfdfd')
			document.documentElement.style.setProperty('--clr-light-dark', '#dedede')
		} else if (this.props.theme === 'Dark') {
			document.documentElement.style.setProperty('--clr-dark', '#0a0a0a')
			document.documentElement.style.setProperty('--clr-dark-accent', '#323232')
			document.documentElement.style.setProperty('--clr-dark-light', '#111111')
			document.documentElement.style.setProperty('--clr-light', '#9c9c9c')
			document.documentElement.style.setProperty('--clr-light-dark', '#636363')
		} else if (this.props.theme === 'Forest') {
			document.documentElement.style.setProperty('--clr-dark', '#02361d')
			document.documentElement.style.setProperty('--clr-dark-accent', '#0e6144')
			document.documentElement.style.setProperty('--clr-dark-light', '#0b3b2a')
			document.documentElement.style.setProperty('--clr-light', '#d7f5ee')
			document.documentElement.style.setProperty('--clr-light-dark', '#abd4c4')
		}
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

const mapStateToProps = state => {
	return {
		theme: state.app.theme
	}
}

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		checkToken: () => dispatch(checkToken(history)),
		getTheme: () => dispatch(getTheme())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)
