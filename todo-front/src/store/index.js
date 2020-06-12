import Vue from 'vue'
import Vuex from 'vuex'


import todo from './todo';

Vue.use(Vuex)

const modules = {
	todo,
};

export default new Vuex.Store({
	modules
})
