<template>
  <div id="player">
    <input v-model="player.name" placeholder="Player Name"/>
    <button v-on:click="playerJoin">Play!</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      player: {
        name: '',
        score: 0,
        response: 0
      }
    }
  },
  components: {
  },
  methods: {
    playerJoin: function () {
      db.collection('players').add(this.player)
    }
  }
})
</script>

<style>
</style>
