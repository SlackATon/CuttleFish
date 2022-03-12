import React from 'react'
import { connect } from 'react-redux'

import { autoSignin } from '../store/auth'

class Main extends React.Component {
	componentDidMount() {
		this.props.autoSignin()
	}

	render() {
		return <h1 className="grid">inside main</h1>
	}
}

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		autoSignin: () => dispatch(autoSignin(history))
	}
}
export default connect(null, mapDispatchToProps)(Main)
