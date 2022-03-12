import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/* Import reducers. */
import contentReducer from './content'
import authReducer from './auth'
import userReducer from './user'

/* Combine reducers. */
const reducer = combineReducers({
	content: contentReducer,
	auth: authReducer,
	user: userReducer
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
const store = createStore(reducer, middleware)

export default store
