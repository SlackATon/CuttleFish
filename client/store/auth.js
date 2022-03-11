import axios from 'axios'

const MANUAL_SIGNIN = 'MANUAL_SIGNIN'
const MANUAL_SIGNIN_ERROR = 'MANUAL_SIGNIN_ERROR'

const _manualSignin = token => ({ type: MANUAL_SIGNIN, token })
const _manualSigninError = alert => ({ type: MANUAL_SIGNIN_ERROR, alert })

export const manualSignin = formObj => {
	return async dispatch => {
		const {
			data: { token, alert }
		} = await axios.post('/api/auth/manualsignin', formObj)

		/*
			If a token was sent from request, set it to store.
			Else a token was not sent, an alert was sent back.
			Set that alert to store.
		*/
		let action

		if (token) {
			action = _manualSignin(token)
			localStorage.setItem('token', token)
		} else {
			localStorage.clear('token')
			action = _manualSigninError(alert)
		}

		dispatch(action)
	}
}

const init = { alert: '', token: '' }

const authReducer = (state = init, action) => {
	switch (action.type) {
		case MANUAL_SIGNIN:
			return { ...state, alert: '', token: action.token }
		case MANUAL_SIGNIN_ERROR:
			return { ...state, token: '', alert: action.alert }
		default:
			return state
	}
}

export default authReducer
