import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollTop: 0,
    delta: 0,
    // 用来设置滚动到顶部是否显示
    upToTop: false
  },
  mutations: {
    changeScrollTop (state, newValue) {
      state.scrollTop = newValue.top,
      state.delta = newValue.delta
    },
    changeupToTop (state, newValue) {
      state.upToTop = newValue
    }
  },
  actions: {
  },
  getters: {
    getTop: state => {
      return state.scrollTop
    },
    getUpToTop: state => {
      return state.upToTop
    }
  },
  modules: {
  }
})
