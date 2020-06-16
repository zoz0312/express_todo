const initialState = {
	timer: 3,
	view: false,
	comments: '',
	style: 'success',
	tout: null,
}

const mutations = {
	POPUP_ALERT (state, obj) {
		clearTimeout(state.tout);
		const t = obj.timer === undefined ? 3 : obj.timer;
		const style = obj.style === undefined ? 'success' : obj.style;
		state.timer = t;
		state.view = true;
		state.comments = obj.comments;
		state.style = style;
		state.tout = setTimeout(() => {
			state.view = false;
			state.comments = '';
			state.style = 'success';
		}, t * 1000);
	},
	VIEW_ALERT (state, type) {
		state.view = type;
	}
}

const actions = {
	popup_alert ({ commit }, data) {
		commit('POPUP_ALERT', data);
	},
	view_alert ({ commit }, type) {
		commit('VIEW_ALERT', type);
	},
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
