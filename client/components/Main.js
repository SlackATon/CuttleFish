import React from 'react'

import Sidebar from './Sidebar/Sidebar'
import Toolbar from './Toolbar/Toolbar'

function Main() {
	return (
		<div className="grid">
			<Sidebar />
			<div class="main">
				<Toolbar />
			</div>
		</div>
	)
}

export default Main
