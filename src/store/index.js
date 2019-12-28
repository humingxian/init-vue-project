import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// vuex 数据持久化插件,利用vuex提供的钩子去执行setStorage
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    storeCount: 10
  },
  mutations: {
    increment (state) {
      state.storeCount++
    }
  },
  modules: {
    user
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer (state) {
      console.log('store', state)
      return {
        user: state.user
      }
    }
  })]
})

export default store
