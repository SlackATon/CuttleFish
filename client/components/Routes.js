import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './Main'
import Auth from './auth/auth'
import Bookmarks from './Bookmark/Bookmarks'

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/signin" component={Auth} />
				<Route path="/bookmarks" component={Bookmarks} />
			</Switch>
		</Router>
	)
}

export default Routes
