import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/* Import reducers. */
import contentReducer from './content'
import authReducer from './auth'
import userReducer from './user'
import helperReducer from './helper'
import appReducer from './app'

/* Combine reducers. */
const reducer = combineReducers({
	content: contentReducer,
	auth: authReducer,
	user: userReducer,
	helper: helperReducer,
	app: appReducer
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
const store = createStore(reducer, middleware)

export default store
