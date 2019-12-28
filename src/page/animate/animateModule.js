const animateModule = {
  namespaced: true,
  state: {
    animate: {
      attributes: {
        top: 10,
        width: 200
      },
      duration: 200
    }
  },
  mutations: {
    doAnimate (state, time) {
      state.animate = {
        ...state.animate,
        duration: time
      }
    }
  }
}

export default animateModule
