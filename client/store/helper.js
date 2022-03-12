/* Utility functions used across the application. */

const ellipsis = (str, chars) => (str.length >= chars ? str.slice(0, chars) + '...' : str)

const dateFormatter = timestamp => {
	const getDate = Date(timestamp).split(' ')

	const month = getDate[1]
	const date = getDate[2]
	const year = getDate[3]

	return `${month} ${date} ${year}`
}

const GET_ELLIPSIS = 'GET_ELLIPSIS'
const GET_DATE_FORMATTER = 'GET_DATE_FORMATTER'

export const _getEllipsis = () => {
	return { type: GET_ELLIPSIS, fn: ellipsis, name: 'ellipsis' }
}

export const _getDateFormatter = () => {
	return { type: GET_DATE_FORMATTER, fn: dateFormatter, name: 'dateFormatter' }
}

const init = {}

const helperReducer = (state = init, action) => {
	switch (action.type) {
		case GET_ELLIPSIS:
			return { ...state, [action.name]: action.fn }
		case GET_DATE_FORMATTER:
			return { ...state, [action.name]: action.fn }
		default:
			return state
	}
}

export default helperReducer
