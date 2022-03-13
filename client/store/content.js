/* Store for the user's bookmarks and tags. */

import axios from 'axios'

const GET_BOOKMARKS = 'GET_BOOKMARKS'
const GET_TAGS = 'GET_TAGS'
const DELETE_BOOKMARK = 'DELETE_BOOKMARK'
const ADD_BOOKMARK = 'ADD_BOOKMARK'

const _getBookmarks = bookmarks => ({ type: GET_BOOKMARKS, bookmarks })
const _getTags = tags => ({ type: GET_TAGS, tags })
const _deleteBookmark = id => ({ type: DELETE_BOOKMARK, id })
const _addBookmark = bookmark => ({ type: ADD_BOOKMARK, bookmark })

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

			if (token) {
				const { data } = await axios.get('/api/content/tags', {
					headers: {
						authorization: token
					}
				})

				if (data) {
					const action = _getTags(data)
					dispatch(action)
				}
			}

			//! TOFIX if the token is not in local storage, redirect to main page.
		} catch (err) {
			console.error(err)
		}
	}
}

export const deleteBookmark = id => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token')

			if (token) {
				await axios.delete(`/api/content/bookmarks/${id}`, {
					headers: {
						authorization: token
					}
				})
			}

			//! TOFIX if the token is not in local storage, redirect to main page.
			//! TOFIX: add condition for 404 response.

			const action = _deleteBookmark(id)
			dispatch(action)
		} catch (err) {
			console.error(err)
		}
	}
}

export const addBookmark = url => {
	return async dispatch => {
		try {
			const token = localStorage.getItem('token')

			if (token) {
				const { data } = await axios.post(
					`/api/content/bookmarks/`,
					{ url: url },
					{
						headers: {
							authorization: token
						}
					}
				)

				const action = _addBookmark(data)
				dispatch(action)
			}

			//! TOFIX if the token is not in local storage, redirect to main page.
			//! TOFIX: add condition for 404 response.
		} catch (err) {
			console.error(err)
		}
	}
}

/*
	{ 
		byBookmarks: { bookmarks: [{}, {}, {}] },
		byTags: { tags: [{}, {}, {}] }
	}
*/
const init = { byBookmarks: {}, byTags: {} }

const contentReducer = (state = init, action) => {
	switch (action.type) {
		case GET_BOOKMARKS:
			return {
				...state,
				byBookmarks: {
					...state.byBookmarks,
					...action.bookmarks
				}
			}
		case GET_TAGS:
			return {
				...state,
				byTags: {
					...state.byTags,
					...action.tags
				}
			}
		case DELETE_BOOKMARK:
			const filtered = state.byBookmarks.bookmarks.filter(
				bookmark => bookmark.id !== action.id
			)

			return { ...state, byBookmarks: { bookmarks: filtered } }
		case ADD_BOOKMARK:
			const byBookmarks = [...state.byBookmarks.bookmarks, action.bookmark]
			return { ...state, byBookmarks: { bookmarks: byBookmarks } }
		default:
			return state
	}
}

export default contentReducer
