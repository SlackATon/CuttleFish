import React from 'react'
import { connect } from 'react-redux'
import { AiOutlineLink } from 'react-icons/ai'

import { addBookmark } from '../../../store/content'

class Toolbar extends React.Component {
	constructor() {
		super()
		this.state = {
			url: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInput = this.handleInput.bind(this)
	}

	handleSubmit(evt) {
		evt.preventDefault()
		this.props.addBookmark(this.state.url)
		this.setState({ url: '' })
	}

	handleInput(evt) {
		this.setState({ url: evt.target.value })
	}

	render() {
		console.log(this.state.url)
		return (
			<div className="main__top-bar">
				<div className="main__top-bar-left">
					{/* <div className="main__top-bar-icon">🍬</div> */}
					<h3 className="main__top-bar-name">News & Social</h3>
				</div>

				<div className="main__top-bar-right">
					<form
						className="main__topbar-right-input-form"
						onSubmit={this.handleSubmit}>
						<div className="main__topbar-right-input-form-icon">
							<AiOutlineLink />
						</div>

						<input
							value={this.state.url}
							onChange={this.handleInput}
							className="main__topbar-right-input"
							placeholder="Enter URL"
							type="text"
						/>
						<button type="submit" className="main__top-bar-submit">
							Add
						</button>
					</form>
					<div className="main__top-bar-button-wrapper">
						<button className="main__top-bar-button">Untag All</button>
						<button className="main__top-bar-button">Delete All</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addBookmark: url => dispatch(addBookmark(url))
	}
}

export default connect(null, mapDispatchToProps)(Toolbar)
