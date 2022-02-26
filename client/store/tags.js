import axios from 'axios'

/* Action types. */
const GET_TAGS = 'GET_TAGS'

/* Action creators. */
const _getTags = tags => ({ type: GET_TAGS, tags })

/* Thunk creators. */
export const getTags = () => {
	return async dispatch => {
		const { data } = await axios.get('/api/tags')
		const action = _getTags(data)
		dispatch(action)
	}
}

const init = {
	all: []
}

const tags = (state = init, action) => {
	switch (action.type) {
		case GET_TAGS:
			return { ...state, all: action.tags }
		default:
			return state
	}
}

export default tags
