import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getTags } from './../../../store/content'
import SidebarTag from './SidebarTag'

function SidebarTagContainer(props) {
	useEffect(() => {
		props.getTags()
	}, [])

	return (
		<ul className="sidebar__tag-ul">
			{props.tags
				? props.tags.map(tag => <SidebarTag key={tag.id} tagDetails={tag} />)
				: null}
		</ul>
	)
}

const mapStateToProps = state => {
	return {
		tags: state.content.byTags.tags
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getTags: () => dispatch(getTags())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTagContainer)
