import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/* Import reducers. */
import content from './content'
import auth from './auth'

/* Combine reducers. */
const reducer = combineReducers({
	content: content,
	auth: auth
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
const store = createStore(reducer, middleware)

export default store
