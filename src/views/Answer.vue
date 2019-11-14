<template>
  <div id="quiz">
    <h1 class="which">Round</h1>
    <div class="responders">
      <div class="rcol">
       <h1 v-for="player in playersIn1" v-bind:key="player" v-bind:style="{color: colors[player.color]}" class="playerz">{{player.name}}</h1>
      </div>
      <div class="rcol">
        <h1 v-for="player in playersIn2" v-bind:key="player" v-bind:style="{color: colors[player.color]}" class="playerz">{{player.name}}</h1>
      </div>
      <div class="rcol">
        <h1 v-for="player in playersIn3" v-bind:key="player" v-bind:style="{color: colors[player.color]}" class="playerz">{{player.name}}</h1>
      </div>
      <div class="rcol">
        <h1 v-for="player in playersIn4" v-bind:key="player" v-bind:style="{color: colors[player.color]}" class="playerz">{{player.name}}</h1>
      </div>
    </div>
    <div id="answers">
      <h1 class="answers" v-bind:style="{background: getColor(0)}">{{quiz[0].ans0}}</h1>
      <h1 class="answers" v-bind:style="{background: getColor(1)}">{{quiz[0].ans1}}</h1>
      <h1 class="answers" v-bind:style="{background: getColor(2)}">{{quiz[0].ans2}}</h1>
      <h1 class="answers" v-bind:style="{background: getColor(3)}">{{quiz[0].ans3}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      players: [],
      quiz: [],
      evonein: false,
      cols: ['rgb(138, 46, 43)',
        'rgb(143, 131, 27)',
        'rgb(71, 134, 56)',
        'rgb(57, 72, 158)'],
      colors: ['rgb(184, 0, 0)', 'rgb(20, 173, 6)', 'rgb(230, 122, 0)', 'rgb(0, 67, 211)', 'rgb(0, 175, 228)', 'rgb(202, 0, 142)', 'rgb(126, 0, 230)']
    }
  },
  methods: {
    getColor (i: number) {
      if (this.quiz[0].correct === i) {
        return this.cols[i]
      } else {
        return 'gray'
      }
    }
  },
  computed: {
    playersIn1 () {
      return this.players.filter(function (player) {
        return player.response === 1
      })
    },
    playersIn2 () {
      return this.players.filter(function (player) {
        return player.response === 2
      })
    },
    playersIn3 () {
      return this.players.filter(function (player) {
        return player.response === 3
      })
    },
    playersIn4 () {
      return this.players.filter(function (player) {
        return player.response === 4
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
    db.collection('quiz').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        this.quiz.push({
          ...change.doc.data()
        })
      })
    })
    db.collection('quiz').doc('quiz').update({
      ready: false
    })
    setTimeout(() => this.$router.push({
      path: '/quiz'
    })
    , 10000)
  }
})
</script>

<style>
.responders {
  display: flex;
  flex-direction: row;
  padding-left: 10vw;
  padding-right: 10vw;
  height: 48vh;
}

.playerz {
  font-size: 50px;
}

.rcol {
  width: 20vw;
}

.which {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 40px;
  font-size: 30px;
}

.quote {
  padding: 5px 10vw 5px 10vw;
  font-style: italic;
  font-size: 85px;
  text-shadow: 2px 2px 4px rgba(195, 184, 255, 0.781);
}

#answers {
  position: relative;
  bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
  display: grid;
  padding-left: 10vw;
  padding-right: 10vw;
  grid-template-columns: 20vw 20vw 20vw 20vw;
}

.answers {
  position: relative;
  bottom: 0px;
  margin-top: 2px;
  margin-bottom: 0px;
  vertical-align: 50%;
  margin: 10px 10px 10px 10px;
  height: 10vh;
  padding-top: 4vh;
  font-size: 55px;
  border-radius: 20px;
}
</style>
