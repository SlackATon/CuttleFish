/* Utility functions used across the application. */

const ellipsis = (str, chars) => (str.length >= chars ? str.slice(0, chars) + '...' : str)

const GET_ELLIPSIS = 'GET_ELLIPSIS'

export const _getEllipsis = () => {
	return { type: GET_ELLIPSIS, fn: ellipsis, name: 'ellipsis' }
}

const init = {}

const helperReducer = (state = init, action) => {
	switch (action.type) {
		case GET_ELLIPSIS:
			return { [action.name]: action.fn }
		default:
			return state
	}
}

export default helperReducer
