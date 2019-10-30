import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    setPlayers: function (playersInGame) {
      this.players = playersInGame
    }
  },
  actions: {
  },
  modules: {
  }
})
