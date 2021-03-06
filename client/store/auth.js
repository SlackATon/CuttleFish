/* Store for authentication. */

import axios from 'axios'

const MANUAL_SIGNIN = 'MANUAL_SIGNIN'
const MANUAL_SIGNIN_ERROR = 'MANUAL_SIGNIN_ERROR'
const SIGN_UP = 'SIGN_UP'
const SIGN_UP_ERROR = 'SIGN_UP_ERROR'
const CLEAR_ALERT = 'CLEAR_ALERT'
const AUTO_SIGNIN = 'AUTO_SIGNIN'
const RESET_STATE = 'RESET_STATE'
const CHECK_TOKEN = 'CHECK_TOKEN'

const _manualSignin = token => ({ type: MANUAL_SIGNIN, token })
const _manualSigninError = alert => ({ type: MANUAL_SIGNIN_ERROR, alert })
const _signUp = token => ({ type: SIGN_UP, token })
const _signUpError = alert => ({ type: SIGN_UP_ERROR, alert })
export const _clearAlert = () => ({ type: CLEAR_ALERT })
const _autoSignin = token => ({ type: AUTO_SIGNIN, token })
const _resetState = () => ({ type: RESET_STATE })
const _checkToken = () => ({ type: CHECK_TOKEN })

export const manualSignin = (formObj, history) => {
	return async dispatch => {
		try {
			const {
				data: { token, alert }
			} = await axios.post('/api/auth/manualsignin', formObj)

			/*
				If a token was response from request, set it to store.
				Else a token was not sent, an alert was sent back.
				Set that alert to store.
			*/
			let action

			if (token) {
				action = _manualSignin(token)
				localStorage.setItem('token', token)
				history.push('/bookmarks') /* Redirects to main page. */
			} else {
				localStorage.clear('token')
				action = _manualSigninError(alert)
			}

			dispatch(action)
		} catch (err) {
			console.error(err)
		}
	}
}

export const signup = (formObj, history) => {
	return async dispatch => {
		try {
			const {
				data: { token, alert }
			} = await axios.post('/api/auth/signup', formObj)

			/*
				If a token was a response from request, set it to store.
				Else a token was not sent, an alert was sent back.
				Set that alert to store.
			*/

			let action

			if (token) {
				action = _signUp(token)
				localStorage.setItem('token', token)
				history.push('/bookmarks') /* Redirects to main page. */
			} else {
				localStorage.clear('token')
				action = _signUpError(alert)
			}
			dispatch(action)
		} catch (err) {
			console.error(err)
		}
	}
}

export const autoSignin = history => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token')

			/*
				If the user have a token in local storage,
				verify that it matches a user in the database.
				Else if the token does not match, clear token,
				and redirect to home page.
			*/
			if (token) {
				/* Returns true or false. */
				const { data } = await axios.get('/api/auth/autosignin', {
					headers: {
						authorization: token
					}
				})

				if (data) {
					const action = _autoSignin(token)

					history.push('/bookmarks') /* Redirects to main page. */
					dispatch(action)
				} else {
					localStorage.clear('token')
					const action = _resetState()
					dispatch(action)
				}
			}
		} catch (err) {
			console.error(err)
		}
	}
}

/* User for when the users click the signout button. */
export const resetState = history => {
	return dispatch => {
		localStorage.clear('token')
		history.push('/')

		const action = _resetState()
		dispatch(action)
	}
}

export const checkToken = history => {
	return dispatch => {
		const token = localStorage.getItem('token')

		if (!token) {
			const action = _checkToken()
			history.push('/signin')
			dispatch(action)
		}
	}
}

const init = { alert: '', token: '', correctUser: false }

const authReducer = (state = init, action) => {
	switch (action.type) {
		case MANUAL_SIGNIN:
			return { ...state, alert: '', token: action.token, correctUser: true }
		case MANUAL_SIGNIN_ERROR:
			return { ...state, token: '', alert: action.alert, correctUser: false }
		case SIGN_UP:
			return { ...state, alert: '', token: action.token, correctUser: true }
		case SIGN_UP_ERROR:
			return { ...state, token: '', alert: action.alert, correctUser: false }
		case CLEAR_ALERT:
			return { ...state, alert: '' }
		case AUTO_SIGNIN:
			return { alert: '', token: action.token, correctUser: true }
		case RESET_STATE:
			return { alert: '', token: '' }
		default:
			return state
	}
}

export default authReducer
