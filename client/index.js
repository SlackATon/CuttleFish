import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store/index.js'
import Routes from './components/Routes.js'

import '../css/index.css'

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app')
)
