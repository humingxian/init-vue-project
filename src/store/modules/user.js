const user = {
  namespaced: true,
  state: {
    userInfo: {
      name: 'hudada',
      age: 18
    }
  },
  mutations: {
    addAge (state) {
      state.userInfo.age++
    }
  }
}

export default user
