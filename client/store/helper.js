/* Utility functions used across the application. */

const ellipsis = (str, chars) => (str.length >= chars ? str.slice(0, chars) + '...' : str)

const dateFormatter = timestamp => {
	const getDate = Date(timestamp).split(' ')

	const month = getDate[1]
	const date = getDate[2]
	const year = getDate[3]

	return `${month} ${date} ${year}`
}

const init = { dateFormatter: dateFormatter, ellipsis: ellipsis }

const helperReducer = (state = init, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default helperReducer
