import axios from 'axios'

const MANUAL_SIGNIN = 'MANUAL_SIGNIN'
const MANUAL_SIGNIN_ERROR = 'MANUAL_SIGNIN_ERROR'
const SIGN_UP = 'SIGN_UP'
const SIGN_UP_ERROR = 'SIGN_UP_ERROR'
const CLEAR_ALERT = 'CLEAR_ALERT'

const _manualSignin = token => ({ type: MANUAL_SIGNIN, token })
const _manualSigninError = alert => ({ type: MANUAL_SIGNIN_ERROR, alert })
const _signUp = token => ({ type: SIGN_UP, token })
const _signUpError = alert => ({ type: SIGN_UP_ERROR, alert })
export const _clearAlert = () => ({ type: CLEAR_ALERT })

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
				history.push('/') /* Redirects to main page. */
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
				If a token was response from request, set it to store.
				Else a token was not sent, an alert was sent back.
				Set that alert to store.
			*/

			let action

			if (token) {
				action = _signUp(token)
				localStorage.setItem('token', token)
				history.push('/') /* Redirects to main page. */
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

const init = { alert: '', token: '' }

const authReducer = (state = init, action) => {
	switch (action.type) {
		case MANUAL_SIGNIN:
			return { ...state, alert: '', token: action.token }
		case MANUAL_SIGNIN_ERROR:
			return { ...state, token: '', alert: action.alert }
		case SIGN_UP:
			return { ...state, alert: '', token: action.token }
		case SIGN_UP_ERROR:
			return { ...state, token: '', alert: action.alert }
		case CLEAR_ALERT:
			return { ...state, alert: '' }
		default:
			return state
	}
}

export default authReducer
