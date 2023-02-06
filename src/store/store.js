import Vuex from 'vuex'


export default new Vuex.Store({
  state: {
    isDark: false
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDark = !state.isDark
    }
  }
})