<template>
  <div id="quiz">
    <input v-model="rightAns" placeholder="Your Name" class="playerName"/>
    <button v-on:click="checkPlayerRight" class="play">NEXT</button>
    <button v-on:click="callPython" class="play">OTHER</button>
    {{rightAns}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      players: [],
      rightAns: 0
    }
  },
  methods: {
    callPython () {
      this.$.ajax({
        type: 'POST',
        url: '~/HNNC.py',
        data: {}
      }).done(function (o) {
        alert('got Python')
      })
    },
    checkPlayerRight () {
      this.players.forEach(p => {
        if (p.response === this.rightAns) {
          db.collection('players').doc(p.name).update({
            score: p.score + 1
          })
          alert(p.name)
        }
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
  }
})
</script>

<style>
</style>
