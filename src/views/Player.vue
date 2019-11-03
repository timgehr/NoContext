<template>
  <div id="player">
    <input v-model="player.name" placeholder="Your Name" class="playerName"/>
     <router-link @click.native='playerJoin' to="playerQuiz" tag="button" class="play">Play!</router-link>
    <h3 class="errMsg">{{msg}}</h3>
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
        response: 0,
        color: 0
      },
      msg: ''
    }
  },
  components: {
  },
  methods: {
    playerJoin: function () {
      if (this.player.name.length > 20) {
        this.msg = 'Name too long!'
        this.player.name = ''
      } else if (this.player.name.length < 1) {
        this.msg = 'Please enter a name'
        this.player.name = ''
      } else {
        this.player.color = Math.floor(7 * Math.random())
        db.collection('players').doc(this.player.name).set(this.player)
        this.msg = ''
        this.$store.commit('setCurrPlayer', this.player.name)
      }
    }
  }
})
</script>

<style>
.errMsg{
  color: rgb(117, 13, 13);
}

.play{
  transition: all 0.1s;
  color: white;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  margin: 40px 20vw 40px 20vw;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 20px;
  height: 75px;
  width: 200px;
  background: rgb(156, 38, 38);
  box-shadow: 0px 10px rgb(104, 20, 20);
  float: center;
}

.play:focus {
  outline: 0px;
}

.play:active {
  transition: all 0.1s;
  margin-top: 47px;
  margin-bottom: 3px;
  box-shadow: 0px 3px rgb(104, 20, 20);
}

.playerName{
  font-weight: bold;
  border: 0px;
  margin-top: 50px;
  margin-left: 12vw;
  margin-right: 12vw;
  width: 400px;
  max-width: 75vw;
  height: 100px;
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 2px 3px rgba(128, 128, 128, 0.253);
  float: center;
}

.playerName:focus {
  outline: 0px;
}
</style>
