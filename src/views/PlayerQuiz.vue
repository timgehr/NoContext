<template>
  <div id="quiz">
    <div id="score">
      {{this.$store.state.currPlayer}}
    </div>
    <div>
      <button v-on:click="respond(1)" class="ans a1">A</button>
      <button v-on:click="respond(2)" class="ans a2">B</button>
      <button v-on:click="respond(3)" class="ans a3">C</button>
      <button v-on:click="respond(4)" class="ans a4">D</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      responded: false
    }
  },
  methods: {
    respond (inputNum) {
      db.collection('players').doc(this.$store.state.currPlayer).update({
        response: inputNum
      })
      this.responded = true
    }
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
  height: 25vh;
  min-width: 60vw;
  width: 400px;
  max-width: 90vw;
}

.a1 {
  background: rgb(138, 46, 43);
  box-shadow: 0px 13px rgb(102, 30, 28);
}

.a2 {
  background: rgb(143, 131, 27);
  box-shadow: 0px 13px rgb(114, 104, 18);
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
  box-shadow: 0px 3pxrgb(102, 30, 28);
}

.a2:active {
  box-shadow: 0px 3px rgb(114, 104, 18);
}

.a3:active {
  box-shadow: 0px 3px rgb(46, 88, 35);
}

.a4:active {
  box-shadow: 0px 3px rgb(33, 46, 107);
}

.ans:focus {
  outline: 0px;
}

.ans:active {
  transition: all 0.1s;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 0px;
}
</style>
