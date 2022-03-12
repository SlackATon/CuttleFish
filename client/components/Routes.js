import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './Main'
import Auth from './auth/auth'

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/signin" component={Auth} />
			</Switch>
		</Router>
	)
}

export default Routes
