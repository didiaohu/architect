
// initial state
const state = {
  productPeach: '我是桃子',
  productApple: '我是苹果',
  homeToProduct:''
}

// getters
const getters = {
  allProductsPeach: state => state.productPeach,
  allProductsApple: state => state.productApple,
  homeToProduct:state=>state.homeToProduct
}

// actions
const actions = {
  getAllProductsPeach ({ commit },products) {
      commit('setProductsPeach', products)
  },
  getHomeToProduct({commit},data){
    commit('changeHomeToProduct',data)
  }
}

// mutations
const mutations = {
  setProductsPeach (state,data) {
    state.productPeach = data
  },
  changeHomeToProduct (state,data) {
    state.homeToProduct = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}