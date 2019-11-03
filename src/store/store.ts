import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    currPlayer: ''
  },
  mutations: {
    setPlayers (state, playersInGame) {
      state.players = playersInGame
    },
    setCurrPlayer (state, player) {
      state.currPlayer = player
    }
  },
  actions: {
  },
  modules: {
  }
})
