import React from 'react'
import { BiLockAlt } from 'react-icons/bi'
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { manualSignin } from '../../store/auth'

class Auth extends React.Component {
	constructor() {
		super()
		this.state = {
			email: 'dean@spn.com',
			password: 'ilikepie',
			username: '',
			signin: true
		}

		this.renderSignup = this.renderSignup.bind(this)
		this.handleSignin = this.handleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	renderSignup() {
		this.setState(prvState => ({ signin: !prvState.signin }))
	}

	handleSignin(evt) {
		this.setState({ [evt.target.name]: evt.target.value })
	}

	handleSubmit(evt) {
		evt.preventDefault()
		const formObj = {
			email: this.state.email,
			password: this.state.password
		}

		this.props.manualSignin(formObj)
	}

	render() {
		console.log(this.props.alert)
		return (
			<div className="auth__right">
				<button onClick={this.renderSignup} className="auth__alter btn">
					{this.state.signin ? 'Signup Instead' : 'Signin Instead'}
				</button>

				<form className="auth__form" onSubmit={this.handleSubmit}>
					<h2 className="auth__heading">
						{this.state.signin ? 'Sign In' : 'Create Account'}
					</h2>
					<div className="auth__input-outer-wrapper email-wrapper">
						<label className="auth__email" htmlFor="email">
							Email
						</label>
						<div className="auth__input-wrapper">
							<div className="form__icon">
								<HiOutlineMail />
							</div>
							<input
								placeholder="Your Email"
								className="auth__input"
								type="text"
								id="email"
								name="email"
								value={this.state.email}
								onChange={this.handleSignin}
							/>
						</div>
					</div>

					{this.state.signin ? null : (
						<div className="auth__input-outer-wrapper username-wrapper">
							<label className="auth__username" htmlFor="username">
								Username
							</label>
							<div className="auth__input-wrapper">
								<div className="form__icon">
									<HiOutlineUser />
								</div>
								<input
									placeholder="Your Username"
									className="auth__input"
									type="text"
									id="username"
									name="username"
									value={this.state.username}
									onChange={this.handleSignin}
								/>
							</div>
						</div>
					)}

					<div className="auth__input-outer-wrapper password-wrapper">
						<label className="auth__password" htmlFor="password">
							Password
						</label>
						<div className="auth__input-wrapper">
							<div className="form__icon">
								<BiLockAlt />
							</div>
							<input
								placeholder="Your Password"
								className="auth__input"
								type="text"
								id="password"
								name="password"
								value={this.state.password}
								onChange={this.handleSignin}
							/>
						</div>
					</div>

					{this.props.alert ? 'test' : null}

					<button className="auth__submit btn" type="submit">
						Submit
					</button>

					{this.props.alert ? (
						<div className="auth__alert">{this.props.alert}</div>
					) : null}

					{this.state.signin ? (
						<button className="auth__password-reset btn">
							Forgot Password
						</button>
					) : null}
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, { history }) => {
	return {
		manualSignin: formObj => dispatch(manualSignin(formObj, history))
	}
}

const mapStateToProps = state => {
	return {
		alert: state.auth.alert
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
