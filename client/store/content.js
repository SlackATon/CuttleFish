/* Store for the user's bookmarks and tags. */

import axios from 'axios'

const GET_BOOKMARKS = 'GET_BOOKMARKS'
const GET_TAGS = 'GET_TAGS'
const DELETE_BOOKMARK = 'DELETE_BOOKMARK'

const _getBookmarks = data => ({ type: GET_BOOKMARKS, data })
const _getTags = data => ({ type: GET_TAGS, data })
const _deleteBookmark = id => ({ type: DELETE_BOOKMARK, id })

export const getBookmarks = () => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token')

			if (token) {
				const { data } = await axios.get('/api/content/bookmarks', {
					headers: {
						authorization: token
					}
				})

				if (data) {
					const action = _getBookmarks(data)
					dispatch(action)
				}
			}

			//! TOFIX if the token is not in local storage, redirect to main page.
		} catch (err) {
			console.error(err)
		}
	}
}

export const getTags = () => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token')

			const { data } = await axios.get('/api/content/tags', {
				headers: {
					authorization: token
				}
			})

			if (data) {
				const action = _getTags(data)
				dispatch(action)
			}
		} catch (err) {
			console.error(err)
		}
	}
}

export const deleteBookmark = id => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token')

			await axios.delete(`/api/content/bookmarks/${id}`, {
				headers: {
					authorization: token
				}
			})

			//! TOFIX: add condition for 404 response.

			const action = _deleteBookmark(id)
			dispatch(action)
		} catch (err) {
			console.error(err)
		}
	}
}

const init = { byBookmarks: {}, byTags: {} }

const contentReducer = (state = init, action) => {
	switch (action.type) {
		case GET_BOOKMARKS:
			return {
				...state,
				byBookmarks: {
					...state.byBookmarks,
					...action.data
				}
			}
		case GET_TAGS:
			return {
				...state,
				byTags: {
					...state.byTags,
					...action.data
				}
			}
		case DELETE_BOOKMARK:
			const filtered = state.byBookmarks.bookmarks.filter(
				bookmark => bookmark.id !== action.id
			)

			return { ...state, byBookmarks: { bookmarks: filtered } }
		default:
			return state
	}
}

export default contentReducer
