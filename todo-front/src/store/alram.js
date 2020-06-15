import axios from 'axios';

const initialState = {
	viewAlram: false,
	dueCnt: 0,
	itemList: [],
}

const mutations = {
	INSERT_ALRAM (state, obj) {
		state.dueCnt = obj.count;
		state.itemList = Object.assign([], obj.itemList);
	},
	IS_ALRAM_SHOW (state) {
		state.viewAlram = !state.viewAlram;
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
			console.log('err', e);
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
