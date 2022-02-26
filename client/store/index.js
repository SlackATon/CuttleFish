import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/* Import reducers. */
import tags from './tags'

/* Combine reducers. */
const reducer = combineReducers({
	tags: tags
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
const store = createStore(reducer, middleware)

export default store
