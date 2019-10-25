<template>
  <div id="host">
    <h1 style="margin-top: 0px; padding-top: 20px;">Waiting for Everyone to Join...</h1>
    <div class="playerTable">
      <h2 v-for="player in players" v-bind:style="{color: colors[player.color]}" v-bind:key="player" class="players">{{player.name}}</h2>
    </div>
    <button class="startGame">START GAME</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      randNum: 0,
      players: [],
      colors: ['rgb(134, 1, 1)', 'rgb(30, 151, 19)', 'rgb(248, 94, 38)', 'rgb(17, 66, 172)', 'rgb(128, 119, 0)', 'rgb(128, 0, 90)', 'rgb(86, 7, 151)']
    }
  },
  methods: {
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
  }
})
</script>

<style>
.playerTable{
  display: grid;
  grid-template-columns: 33vw 34vw 33vw;
}

.players{
  margin-top: 0px;
  font-size: 45px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(58, 58, 58, 0.486);
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
