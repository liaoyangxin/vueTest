import Vue from 'vue'
import Vuex from 'vuex'

// 挂载Vuex
Vue.use(Vuex)

// 创建VueX对象
const store = new Vuex.Store({
  state: {
    // 存放的键值对就是所要管理的状态
    name: 'store 中的name属性'
  },
  // getters
  mutations: {
    editName (state, str) {
      console.log(' mutations str', str)
      state.name = str
    }
  },
  actions: {
    editName1({ commit },str) {
      commit('editName', str)
    }
  }
})

export default store
