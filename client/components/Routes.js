import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Auth from './Auth/Auth'
import Bookmarks from './Bookmark/Bookmarks'
import LandingPage from './LandingPage/LandingPage'

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route path="/signin" component={Auth} />
				<Route path="/bookmarks" component={Bookmarks} />
			</Switch>
		</Router>
	)
}

export default Routes
