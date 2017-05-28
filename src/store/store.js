import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		name: 'Diego',
		users: [],
		currUser: {},
		ordenes: [],
		fire: null,
		customers: [],
	}
})
