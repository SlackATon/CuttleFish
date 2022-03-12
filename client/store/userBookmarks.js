import axios from 'axios'

const GET_BOOKMARKS = 'GET_BOOKMARKS'
const CLEAR_BOOKMARKS = 'CLEAR_BOOKMARKS'

const _getBookmarks = data => ({ type: GET_BOOKMARKS, data })
const _clearBookmarks = () => ({ type: CLEAR_BOOKMARKS })

export const getBookmarks = () => {
	return async dispatch => {
		const token = localStorage.getItem('token')

		const { data } = await axios.get('/api/userbookmarks/user', {
			headers: {
				authorization: token
			}
		})

		if (data) {
			const action = _getBookmarks(data)
			dispatch(action)
		} else {
			const action = _clearBookmarks()
			dispatch(action)
		}
	}
}

const init = {}

const userBookmarks = (state = init, action) => {
	switch (action.type) {
		case GET_BOOKMARKS:
			return { ...state, ...action.data, icon: '/usericons/' + action.data.icon }
		default:
			return state
	}
}

export default userBookmarks
