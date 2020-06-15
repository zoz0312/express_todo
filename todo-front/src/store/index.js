import Vue from 'vue'
import Vuex from 'vuex'


import todo from './todo';
import alert from './alert';
import alram from './alram';

Vue.use(Vuex)

const modules = {
	todo,
	alert,
	alram,
};

export default new Vuex.Store({
	modules
})
