import React from 'react'
import { connect } from 'react-redux'

import SidebarTag from './SidebarTag'
import { getTags } from '../../store/tags'

class SidebarTagContainer extends React.Component {
	componentDidMount() {
		this.props.requestTags()
	}

	render() {
		console.log(this.props.tags)
		return (
			<ul className="sidebar__tag-ul">
				{this.props.tags.map(tag => (
					<SidebarTag key={tag.id} tagData={tag} />
				))}
			</ul>
		)
	}
}

const mapState = state => ({ tags: state.tags.all })
const mapDispatch = dispatch => ({ requestTags: () => dispatch(getTags()) })

export default connect(mapState, mapDispatch)(SidebarTagContainer)
