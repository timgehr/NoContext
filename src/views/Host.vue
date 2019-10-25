<template>
  <div id="host">
    <div v-for="player in players" v-bind:key="player">
      <h1 style="margin-top: 0px;">{{player.name}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      players: []
    }
  },
  components: {
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
</style>
