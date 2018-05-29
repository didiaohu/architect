import * as home from '@/service/api/home'

// initial state
const state = {
  all: '我是all',
  productToHome:'我是productTo'
}

// getters
const getters = {
  allProducts: state => state.all,
  productToHome: state => state.productToHome
}

// actions
const actions = {
  getAllProducts ({ commit }) {
     home.getProducts((products) => {
      commit('setProducts', products)
     })
  },
  getProductToHome({commit},data){
    console.log('product将值传入home触发啦')
    commit('changeProductToHome',data)
  }
}

// mutations
const mutations = {
  setProducts (state,products) {
    state.all = products
  },
  changeProductToHome (state,data) {
    state.productToHome = data
    console.log(state.productToHome)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}