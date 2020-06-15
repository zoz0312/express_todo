const initialState = {
	id: 0,
	viewType: 'insert',
	view: false,
	title: '',
	contents: '',
	dueDate: '',
	createDate: '',
	updateDate: '',
	type: 'assign',
	depth: 0,
}

const mutations = {
	UPDATE_CARD (state, obj) {
		state.id = obj.id;
		state.viewType = obj.viewType;
		state.view = true;
		state.title = obj.title;
		state.contents = obj.contents;
		state.dueDate = obj.dueDate;
		state.createDate = obj.createDate;
		state.updateDate = obj.updateDate;
		state.type = obj.type;
		state.depth = obj.depth;
	},
	VIEW_TYPE (state, type) {
		state.view = type;
	},
	CLEAR_DUE_DATE (state) {
		state.dueDate = '';
	}
}

const actions = {
	update_card ({ commit }, data) {
		commit('UPDATE_CARD', data);
	},
	insert_card ({ commit }) {
		commit('UPDATE_CARD',{
			id: 0,
			viewType: 'insert',
			view: true,
			title: '',
			contents: '',
			dueDate: '',
			createDate: '',
			updateDate: '',
			type: 'assign',
			depth: 0,
		});
	},
	view_type ({ commit }, type) {
		commit('VIEW_TYPE', type);
	},
	clear_due_date ({ commit }) {
		commit('CLEAR_DUE_DATE')
	}
}

const getters = {
	/* Insert Example */
}

export default {
	state: {
		...initialState
	},
	mutations,
	actions,
	getters
}
