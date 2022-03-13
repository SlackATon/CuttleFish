import React from 'react'
import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi'
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi'
import { connect } from 'react-redux'

import { manualSignin, signup, _clearAlert, autoSignin } from '../../store/auth'

class Auth extends React.Component {
	constructor() {
		super()
		this.state = {
			email: 'dean@spn.com',
			password: 'ilikepie',
			username: '',
			signin: true,
			showPassword: false
		}

		this.renderSignup = this.renderSignup.bind(this)
		this.handleFormData = this.handleFormData.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		this.props.autoSignin()
	}

	renderSignup() {
		this.setState(prvState => ({ signin: !prvState.signin }))
		this.props.clearAlert()
	}

	handleFormData(evt) {
		this.setState({ [evt.target.name]: evt.target.value })
	}

	handlePassword() {
		this.setState(prv => ({ showPassword: !prv.showPassword }))
	}

	handleSubmit(evt) {
		evt.preventDefault()
		const { email, password, username } = this.state

		/* If signin is true, dispach the signin thunk. */
		if (this.state.signin) {
			this.props.manualSignin({ email, password })
		} else {
			/* Else if dispatch the signup thunk. */
			this.props.signup({ email, password, username })
		}
	}

	render() {
		return (
			<div className="auth__right">
				<form className="auth__form" onSubmit={this.handleSubmit}>
					<button
						type="button"
						onClick={this.renderSignup}
						className="auth__alter btn">
						{this.state.signin ? 'Signup Instead' : 'Signin Instead'}
					</button>

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
								onChange={this.handleFormData}
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
									onChange={this.handleFormData}
								/>
							</div>
						</div>
					)}

					<div className="auth__input-outer-wrapper password-wrapper">
						<label className="auth__password" htmlFor="password">
							Password
						</label>
						<div className="auth__input-wrapper">
							<div onClick={this.handlePassword} className="form__icon">
								{this.state.showPassword ? (
									<BiLockOpenAlt />
								) : (
									<BiLockAlt />
								)}
							</div>
							<input
								placeholder="Your Password"
								className="auth__input"
								type={this.state.showPassword ? 'text' : 'password'}
								id="password"
								name="password"
								value={this.state.password}
								onChange={this.handleFormData}
							/>
						</div>
					</div>

					<button className="auth__submit btn" type="submit">
						Submit
					</button>

					{this.props.alert ? (
						<div className="auth__alert">{this.props.alert}</div>
					) : null}

					{this.state.signin ? (
						<button type="button" className="auth__password-reset btn">
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
		manualSignin: formObj => dispatch(manualSignin(formObj, history)),
		signup: formObj => dispatch(signup(formObj, history)),
		clearAlert: () => dispatch(_clearAlert()),
		autoSignin: () => dispatch(autoSignin(history))
	}
}

const mapStateToProps = state => {
	return {
		alert: state.auth.alert
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
