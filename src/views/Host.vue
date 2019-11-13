<template>
  <div id="host">
    <h1 style="margin-top: 0px; padding-top: 20px;">Waiting for Everyone to Join...</h1>
    <div class="playerTable">
      <h2 v-for="player in players" v-bind:style="{color: colors[player.color]}" v-bind:key="player" class="players" v-on:click="removePlayer(player.name)">{{player.name}}</h2>
    </div>
    <router-link @click.native='startGame' to="quiz" tag="button" class="startGame">START GAME</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      nextPg: 'quiz',
      players: [],
      colors: ['rgb(184, 0, 0)', 'rgb(20, 173, 6)', 'rgb(230, 122, 0)', 'rgb(0, 67, 211)', 'rgb(0, 175, 228)', 'rgb(202, 0, 142)', 'rgb(126, 0, 230)']
    }
  },
  methods: {
    removePlayer: function (name: string) {
      // db.collection('players').delete()
    },
    startGame: function () {
      this.$store.commit('setPlayers', this.players)
      db.collection('quiz').doc('quiz').update({
        ready: false,
        playersIn: 0,
        players: this.players.length
      })
    }
  },
  created () {
    db.collection('players').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        this.players.push({
          ...change.doc.data()
        })
      })
    })
    db.collection('quiz').doc('quiz').update({
      ready: false
    })
  }
})
</script>

<style>
.playerTable{
  display: grid;
  grid-template-columns: 33vw 34vw 33vw;
  color: rgb(230, 122, 0);
}

.players{
  margin-top: 0px;
  font-size: 45px;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(156, 156, 156, 0.486);
}

.players:hover{
  background: rgb(238, 177, 177);
}

.startGame{
  transition: all 0.1s;
  color: white;
  padding: 20px;
  font-size: 50px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 28px;
  height: 150px;
  width: 400px;
  background: rgb(156, 38, 38);
  box-shadow: 0px 13px rgb(104, 20, 20);
}

.startGame:focus {
  outline: 0px;
}

.startGame:active {
  transition: all 0.1s;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 3px rgb(104, 20, 20);
}
</style>
