/* Store to keep application state. */

const SHOW_SIDEBAR_MODAL = 'SHOW_SIDEBAR_MODAL'
const HIDE_SIDEBAR_MODAL = 'HIDE_SIDEBAR_MODAL'

export const _showSidebarModal = () => ({ type: SHOW_SIDEBAR_MODAL })
export const _hideSidebarModal = () => ({ type: HIDE_SIDEBAR_MODAL })

const init = { sidebarModal: false }

const appReducer = (state = init, action) => {
	switch (action.type) {
		case SHOW_SIDEBAR_MODAL:
			return { ...state, sidebarModal: true }
		case HIDE_SIDEBAR_MODAL:
			return { ...state, sidebarModal: false }
		default:
			return state
	}
}

export default appReducer
