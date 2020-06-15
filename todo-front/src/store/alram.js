import axios from 'axios';

const initialState = {
	dueCnt: 0,
	itemList: [],
}

const mutations = {
	INSERT_ALRAM (state, obj) {
		state.dueCnt = obj.count;
		state.itemList = Object.assign([], obj.itemList);
	},
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
