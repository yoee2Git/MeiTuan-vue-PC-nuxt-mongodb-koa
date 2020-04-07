export const state = () => ({
  position: {}
})

export const mutations = {
  setPosition(state,val){
    state.position = val;
  }
}

export const actions = {
  setPosition({commit},position){
    commit('setPosition',position)
  }
}

export const getters = {
  setPosition(state,val){
    state.position = val;
  }
}