import Vue from 'vue'
import Vuex from 'vuex'


import todo from './todo';
import alert from './alert';

Vue.use(Vuex)

const modules = {
	todo,
	alert,
};

export default new Vuex.Store({
	modules
})
