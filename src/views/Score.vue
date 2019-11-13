<template>
  <div id="score">
    <h2 class="scoreText2" v-bind:style="{color: colors[player.color]}">{{$store.state.currPlayer}}</h2>
    <h1 class="scoreText1">{{player.score}} points</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      quiz: null,
      player: null,
      colors: ['rgb(184, 0, 0)', 'rgb(20, 173, 6)', 'rgb(230, 122, 0)', 'rgb(0, 67, 211)', 'rgb(0, 175, 228)', 'rgb(202, 0, 142)', 'rgb(126, 0, 230)']
    }
  },
  created () {
    db.collection('players').doc(this.$store.state.currPlayer).update({
      response: 0
    })
    db.collection('players').where('name', '==', this.$store.state.currPlayer).onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        this.player = change.doc.data()
      })
    })
    db.collection('quiz').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        this.quiz = change.doc.data()
        if (this.quiz.ready === true) {
          this.$router.push({
            path: '/playerQuiz'
          })
        }
      })
    })
  }
})
</script>

<style>
.scoreText2 {
  margin-top: 0px;
  padding-top: 40px;
  font-size: 40px;
  font-weight: bold;
}
.scoreText1 {
  margin-top: 0px;
  padding-top: 40px;
  font-size: 70px;
  font-weight: bold;
}
</style>
