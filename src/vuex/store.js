import { createStore } from 'vuex'
import commonActions from './actions/actions'
import apiRequest from './actions/api'
import mutations from './mutations/mutations'
import state from './state/state'
import getters from './getters/getters'

const actions = {...commonActions, ...apiRequest}

export default createStore({
  searchValue: '',
  state, 
  mutations,
  actions,
  getters

})

