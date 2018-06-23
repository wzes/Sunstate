import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'admin',
    password: 'admin',
    contracts: [],
    jobs: [],
    drivers: [],
    equipments: [],
    c_initialize: false,
    j_initialize: false,
    e_initialize: false,
    d_initialize: false
  }
})
