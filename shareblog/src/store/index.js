import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollTop: 0,
    delta: 0
  },
  mutations: {
    changeScrollTop (state, newValue) {
      state.scrollTop = newValue.top,
      state.delta = newValue.delta
    }
  },
  actions: {
  },
  getters: {
    getTop: state => {
      return state.scrollTop
    }
  },
  modules: {
  }
})
