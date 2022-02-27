import axios from 'axios'

/* Action types. */
const GET_BOOKMARKS = 'GET_BOOKMARKS'

/* Action creators. */
const _getBookmarks = bookmarks => ({ type: GET_BOOKMARKS, bookmarks })

/* Thunk creators. */
export const getBookmarks = () => {
	return async dispatch => {
		const { data } = await axios.get('/api/bookmarks')
		const action = _getBookmarks(data)
		dispatch(action)
	}
}

const init = {
	all: []
}

const tags = (state = init, action) => {
	switch (action.type) {
		case GET_BOOKMARKS:
			return { ...state, all: action.bookmarks }
		default:
			return state
	}
}

export default tags
