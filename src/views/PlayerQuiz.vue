<template>
  <div id="quiz">
    <div>
      <button v-on:click="respond(1)" class="ans a1">{{answers[0].ans0}}</button>
      <button v-on:click="respond(2)" class="ans a2">{{answers[0].ans1}}</button>
      <button v-on:click="respond(3)" class="ans a3">{{answers[0].ans2}}</button>
      <button v-on:click="respond(4)" class="ans a4">{{answers[0].ans3}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      responded: false,
      answers: []
    }
  },
  methods: {
    respond (inputNum) {
      db.collection('players').doc(this.$store.state.currPlayer).update({
        response: inputNum
      })
      this.responded = true
    }
  },
  created () {
    db.collection('quiz').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        this.answers.push({
          ...change.doc.data()
        })
      })
    })
  }
})
</script>

<style>
#score {
  height: 30px;
  background: white;
  color: black;
  text-align: center;
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
