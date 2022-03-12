/* Seperate store for user information that is not as sensitive as password or Id. */

import axios from 'axios'

const GET_INFO = 'GET_INFO'

const _getInfo = userObj => ({ type: GET_INFO, userObj })

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

const init = { email: '', username: '', icon: '' }

const userReducer = (state = init, action) => {
	switch (action.type) {
		case GET_INFO:
			return {
				...state,
				username: action.userObj.username,
				icon: action.userObj.icon
			}
		default:
			return state
	}
}

export default userReducer
