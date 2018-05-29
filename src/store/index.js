import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import home from './modules/home'
import products from './modules/products'
import datasets from './modules/orm/datasets.js'
import reports from './modules/orm/reports.js'
import users from './modules/orm/users.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    products,
    datasets,
    reports,
    users,
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
})
