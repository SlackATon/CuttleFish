import axios from 'axios'

const MANUAL_SIGNIN = 'MANUAL_SIGNIN'

const _manualSignin = (alert, token) => ({ type: MANUAL_SIGNIN, alert, token })

export const manualSignin = formObj => {
	return async dispatch => {
		const {
			data: { token, alert }
		} = await axios.post('/api/auth/manualsignin', formObj)

		const action = _manualSignin(alert, token)
		localStorage.setItem('token', token)
		dispatch(action)
	}
}

const init = { alert: '', token: '' }

const authReducer = (state = init, action) => {
	switch (action.type) {
		case MANUAL_SIGNIN:
			return { ...state, alert: action.alert, token: action.token }
		default:
			return state
	}
}

export default authReducer
