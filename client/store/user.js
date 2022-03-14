/* Seperate store for user information that is not as sensitive as password or Id. */

import axios from 'axios'

const GET_INFO = 'GET_INFO'
const CHANGE_THEME = 'CHANGE_THEME'

const _getInfo = userObj => ({ type: GET_INFO, userObj })
const _changeTheme = theme => ({ type: CHANGE_THEME, theme })

export const getInfo = () => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token')

			if (token) {
				const { data } = await axios.get('/api/user', {
					headers: {
						authorization: token
					}
				})

				if (data) {
					const action = _getInfo(data)
					dispatch(action)
				}

				//! TOFIX if the token is not in local storage, redirect to main page.
			}
		} catch (err) {
			console.error(err)
		}
	}
}

export const changeTheme = theme => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token')

			if (token) {
				const { data } = await axios.post(
					'/api/user/theme',
					{ theme: theme },
					{
						headers: {
							authorization: token
						}
					}
				)

				if (data) {
					const action = _changeTheme(data)
					dispatch(action)
				}

				//! TOFIX if the token is not in local storage, redirect to main page.
			}
		} catch (err) {
			console.error(err)
		}
	}
}

const init = { email: '', username: '', icon: '', theme: '' }

const userReducer = (state = init, action) => {
	switch (action.type) {
		case GET_INFO:
			return {
				...state,
				username: action.userObj.username,
				icon: '/usericons/' + action.userObj.icon,
				theme: action.userObj.theme
			}
		case CHANGE_THEME:
			return { ...state, theme: action.theme }
		default:
			return state
	}
}

export default userReducer
