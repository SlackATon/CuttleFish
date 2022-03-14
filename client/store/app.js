/* Store to keep application state. */

import axios from 'axios'

const SHOW_SIDEBAR_MODAL = 'SHOW_SIDEBAR_MODAL'
const HIDE_SIDEBAR_MODAL = 'HIDE_SIDEBAR_MODAL'
const GET_THEME = 'GET_THEME'

export const _showSidebarModal = () => ({ type: SHOW_SIDEBAR_MODAL })
export const _hideSidebarModal = () => ({ type: HIDE_SIDEBAR_MODAL })
const _getTheme = theme => ({ type: GET_THEME, theme })

export const getTheme = () => {
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
					const action = _getTheme(data.theme)
					dispatch(action)
				}

				//! TOFIX if the token is not in local storage, redirect to main page.
			}
		} catch (err) {
			console.error(err)
		}
	}
}

const init = { sidebarModal: false, theme: '' }

const appReducer = (state = init, action) => {
	switch (action.type) {
		case SHOW_SIDEBAR_MODAL:
			return { ...state, sidebarModal: true }
		case HIDE_SIDEBAR_MODAL:
			return { ...state, sidebarModal: false }
		case GET_THEME:
			return { ...state, theme: action.theme }
		default:
			return state
	}
}

export default appReducer
