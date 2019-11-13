<template>
  <div id="quiz">
    <div v-show="!responded" v-bind:key="responded">
      <button v-on:click="respond(1)" class="ans a1">{{quiz.ans0}}</button>
      <button v-on:click="respond(2)" class="ans a2">{{quiz.ans1}}</button>
      <button v-on:click="respond(3)" class="ans a3">{{quiz.ans2}}</button>
      <button v-on:click="respond(4)" class="ans a4">{{quiz.ans3}}</button>
    </div>
    <div v-show="responded" v-bind:key="responded">
      <h1 class="score">Waiting for everyone else...</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      show: false,
      responded: false,
      quiz: null
    }
  },
  methods: {
    respond (inputNum) {
      db.collection('players').doc(this.$store.state.currPlayer).update({
        response: inputNum
      })
    }
  },
  beforeUpdate () {
    if (this.quiz.ready === false) {
      this.$router.push({
        path: '/score'
      })
    }
  },
  created () {
    db.collection('quiz').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        this.quiz = change.doc.data()
      })
    })
  }
})
</script>

<style>
.score {
  margin-top: 0px;
  padding-top: 40px;
  font-size: 60px;
  font-weight: bold;
}

.ans {
  transition: all 0.1s;
  color: white;
  padding: 20px;
  font-size: calc(20px + 4vh);
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 28px;
  height: 200px;
  max-height: calc(25vh - 23px);
  min-width: 60vw;
  width: 400px;
  max-width: 90vw;
}

.a1 {
  background: rgb(138, 46, 43);
  box-shadow: 0px 13px rgb(102, 30, 28);
}

.a2 {
  background: rgb(172, 156, 17);
  box-shadow: 0px 13px rgb(134, 122, 14);
}

.a3 {
  background: rgb(71, 134, 56);
  box-shadow: 0px 13px rgb(46, 88, 35);
}

.a4 {
  background: rgb(57, 72, 158);
  box-shadow: 0px 13px rgb(33, 46, 107);
}

.a1:active {
  transition: all 0.1s;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 3px rgb(102, 30, 28);
}

.a2:active {
  transition: all 0.1s;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 3px rgb(134, 122, 14);
}

.a3:active {
  transition: all 0.1s;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 3px rgb(46, 88, 35);
}

.a4:active {
  transition: all 0.1s;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 3px rgb(33, 46, 107);
}

.ans:focus {
  outline: 0px;
}
</style>
