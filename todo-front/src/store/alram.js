import axios from 'axios';

const initialState = {
	viewAlram: false,
	dueCnt: 0,
	itemList: [],
	aniClass: '',
}

const mutations = {
	INSERT_ALRAM (state, obj) {
		state.dueCnt = obj.count;
		state.itemList = Object.assign([], obj.itemList);
	},
	IS_ALRAM_SHOW (state) {
		state.viewAlram = !state.viewAlram;
		state.aniClass = 'animated ' + (state.viewAlram ? 'zoomIn' : 'zoomOut');
	}
}

const actions = {
	async get_alram ({ commit }) {
		try {
			const { data } = await axios.post('/todo/alramCount');
			const inData = data.data.items;
			commit('INSERT_ALRAM', {
				count: inData.length,
				itemList: inData
			});
		} catch (e) {
			commit('POPUP_ALERT', {
				timer: 3,
				comments: `Post Fail - ${e.name} : ${e.message} 새로고침 해주세요.`,
				style: 'danger',
			});
		}
	},
	is_alram_show ({ commit }) {
		commit('IS_ALRAM_SHOW');
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
