import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './Main.js'

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Main} />
			</Switch>
		</Router>
	)
}

export default Routes
