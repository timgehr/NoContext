<template>
  <div id="quiz">
    <div id="quote">
      <h2 class="which">{{'Which Heckin Nerd Said:'}}</h2>
      <h1 class="quote">{{line.Message}}</h1>
    </div>
    <div id="answers">
      <h1 class="answers" style="background: rgb(138, 46, 43);">{{ans[0]}}</h1>
      <h1 class="answers" style="background: rgb(172, 156, 17);">{{ans[1]}}</h1>
      <h1 class="answers" style="background: rgb(71, 134, 56);">{{ans[2]}}</h1>
      <h1 class="answers" style="background: rgb(57, 72, 158);">{{ans[3]}}</h1>
    </div>
    <h2 class="playerLi">{{inPlayers.length}} / {{this.quiz[0].players}}</h2>
    <button v-on:click="endGame">end game</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import db from '@/fb'

export default Vue.extend({
  data () {
    return {
      players: [],
      HECKINNERDS: [
        ' BryceRombach ',
        ' EthanBrody ',
        ' StoneBrackett ',
        ' PaxtonLeaf ',
        ' NateWoo ',
        ' BenGochanour ',
        ' BrettFrancis ',
        ' JordanZimmerman ',
        ' PerryPowell ',
        ' AlexParsells ',
        ' JamesMartindale ',
        ' TimGehrsitz ',
        ' ErikFretland ',
        ' JacobLuft '
      ],
      NerdNames: [
        'Bryce',
        'Ethan',
        'Stone',
        'Paxton',
        'Nate',
        'Ben',
        'Brett',
        'Jordan',
        'Perry',
        'Alex',
        'James',
        'Tim',
        'Erik',
        'Jacob'
      ],
      lineno: 0,
      textByLine: {
        Lines: []
      },
      line: {
        MessageType: 'Message',
        AvatarUrl: '',
        Timestamp: 0,
        Likes: [],
        Nickname: '0',
        SentBy: ' NateWoo ',
        Message: '',
        FIELD8: '',
        FIELD9: '',
        FIELD10: ''
      },
      ans: [],
      correctAnswer: 0,
      playersIn: 0,
      quiz: []
    }
  },
  methods: {
    endGame () {
      for (var i = 0; i < this.players.length; i++) {
        db.collection('players').doc(this.players[i].name).delete()
      }
      db.collection('quiz').doc('quiz').update({
        ans1: null,
        ans2: null,
        ans3: null,
        ans0: null,
        correct: 0,
        players: 0,
        ready: false
      })
      this.$router.push({ path: '/' })
    },
    playRound () {
      db.collection('quiz').doc('quiz').update({
        ready: true
      })
      this.lineno = Math.floor(Math.random() * (this.textByLine.Lines.length - 1))
      this.line = this.textByLine.Lines[this.lineno]
      var i

      var indices = [0, 0, 0, 0]
      indices[0] = this.HECKINNERDS.indexOf(this.line.SentBy) // Correct Answer

      for (i = 0; i < 3; i++) {
        var prandom = Math.floor(Math.random() * 102)
        if (prandom <= 9) {
          indices[i + 1] = 0
        } else if (prandom <= 20) {
          indices[i + 1] = 1
        } else if (prandom <= 31) {
          indices[i + 1] = 2
        } else if (prandom <= 36) {
          indices[i + 1] = 3
        } else if (prandom <= 46) {
          indices[i + 1] = 4
        } else if (prandom <= 53) {
          indices[i + 1] = 5
        } else if (prandom <= 59) {
          indices[i + 1] = 6
        } else if (prandom <= 67) {
          indices[i + 1] = 7
        } else if (prandom <= 74) {
          indices[i + 1] = 8
        } else if (prandom <= 84) {
          indices[i + 1] = 9
        } else if (prandom <= 85) {
          indices[i + 1] = 10
        } else if (prandom <= 94) {
          indices[i + 1] = 11
        } else if (prandom <= 95) {
          indices[i + 1] = 12
        } else if (prandom <= 101) {
          indices[i + 1] = 13
        }
      }
      while (indices[0] === indices[1]) {
        prandom = Math.floor(Math.random() * 102)
        if (prandom <= 9) {
          indices[1] = 0
        } else if (prandom <= 20) {
          indices[1] = 1
        } else if (prandom <= 31) {
          indices[1] = 2
        } else if (prandom <= 36) {
          indices[1] = 3
        } else if (prandom <= 46) {
          indices[1] = 4
        } else if (prandom <= 53) {
          indices[1] = 5
        } else if (prandom <= 59) {
          indices[1] = 6
        } else if (prandom <= 67) {
          indices[1] = 7
        } else if (prandom <= 74) {
          indices[1] = 8
        } else if (prandom <= 84) {
          indices[1] = 9
        } else if (prandom <= 85) {
          indices[1] = 10
        } else if (prandom <= 94) {
          indices[1] = 11
        } else if (prandom <= 95) {
          indices[1] = 12
        } else if (prandom <= 101) {
          indices[1] = 13
        }
      }
      while (indices[2] === indices[1] || indices[2] === indices[0]) {
        prandom = Math.floor(Math.random() * 102)
        if (prandom <= 9) {
          indices[2] = 0
        } else if (prandom <= 20) {
          indices[2] = 1
        } else if (prandom <= 31) {
          indices[2] = 2
        } else if (prandom <= 36) {
          indices[2] = 3
        } else if (prandom <= 46) {
          indices[2] = 4
        } else if (prandom <= 53) {
          indices[2] = 5
        } else if (prandom <= 59) {
          indices[2] = 6
        } else if (prandom <= 67) {
          indices[2] = 7
        } else if (prandom <= 74) {
          indices[2] = 8
        } else if (prandom <= 84) {
          indices[2] = 9
        } else if (prandom <= 85) {
          indices[2] = 10
        } else if (prandom <= 94) {
          indices[2] = 11
        } else if (prandom <= 95) {
          indices[2] = 12
        } else if (prandom <= 101) {
          indices[2] = 13
        }
      }
      while (indices[3] === indices[0] || indices[3] === indices[1] || indices[2] === indices[3]) {
        prandom = Math.floor(Math.random() * 102)
        if (prandom <= 9) {
          indices[3] = 0
        } else if (prandom <= 20) {
          indices[3] = 1
        } else if (prandom <= 31) {
          indices[3] = 2
        } else if (prandom <= 36) {
          indices[3] = 3
        } else if (prandom <= 46) {
          indices[3] = 4
        } else if (prandom <= 53) {
          indices[3] = 5
        } else if (prandom <= 59) {
          indices[3] = 6
        } else if (prandom <= 67) {
          indices[3] = 7
        } else if (prandom <= 74) {
          indices[3] = 8
        } else if (prandom <= 84) {
          indices[3] = 9
        } else if (prandom <= 85) {
          indices[3] = 10
        } else if (prandom <= 94) {
          indices[3] = 11
        } else if (prandom <= 95) {
          indices[3] = 12
        } else if (prandom <= 101) {
          indices[3] = 13
        }
      }

      var order = [0, 0, 0, 0]
      order[0] = Math.floor(Math.random() * 4)
      order[1] = Math.floor(Math.random() * 4)
      order[2] = Math.floor(Math.random() * 4)
      order[3] = Math.floor(Math.random() * 4)

      while (order[0] === order[1]) {
        order[1] = Math.floor(Math.random() * 4)
      }
      while (order[2] === order[1] || order[2] === order[0]) {
        order[2] = Math.floor(Math.random() * 4)
      }
      while (order[3] === order[0] || order[3] === order[1] || order[2] === order[3]) {
        order[3] = Math.floor(Math.random() * 4)
      }

      this.correctAnswer = order.indexOf(0)
      for (i = 0; i < 4; i++) {
        this.ans[i] = this.NerdNames[indices[order[i]]]
      }

      db.collection('quiz').doc('quiz').update({
        ans0: this.NerdNames[indices[order[0]]],
        ans1: this.NerdNames[indices[order[1]]],
        ans2: this.NerdNames[indices[order[2]]],
        ans3: this.NerdNames[indices[order[3]]],
        correct: this.correctAnswer
      })
    }
  },
  computed: {
    inPlayers () {
      return this.players.filter(function (player) {
        return player.response > 0
      })
    },
    everyoneIn () {
      return (this.players.filter(function (player) {
        return player.response > 0
      }).length === this.quiz[0].players)
    }
  },
  created () {
    this.textByLine = require('../Messages.json')
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
    this.playRound()
  },
  updated () {
    if (this.everyoneIn) {
      for (var i = 0; i < this.inPlayers.length; i++) {
        console.log(this.inPlayers[i].response + ' ' + this.correctAnswer + 1)
        if (this.inPlayers[i].response === this.correctAnswer + 1) {
          db.collection('players').doc(this.inPlayers[i].name).update({
            score: this.inPlayers[i].score + 1
          })
        }
      }
      this.$router.push({ path: '/answer' })
    }
  }
})
</script>

<style>
.ans {
  transition: all 0.1s;
  color: white;
  padding: 20px;
  font-size: calc(15px + 2vh);
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 20px;
  height: 10vh;
  min-width: 30vw;
  width: 200px;
  max-width: 45vw;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding: auto;
}

.a1 {
  background: rgb(138, 46, 43);
  box-shadow: 0px 13px rgb(102, 30, 28);
}

.a1:active {
  transition: all 0.1s;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 0px;
  box-shadow: 0px 3px rgb(102, 30, 28);
}

.ans:focus {
  outline: 0px;
}

.which {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 40px;
  font-size: 30px;
}

.quote {
  height: 48vh;
  padding: 5px 10vw 5px 10vw;
  font-style: italic;
  font-size: 85px;
  text-shadow: 2px 2px 4px rgba(195, 184, 255, 0.781);
}

#answers {
  position: relative;
  bottom: 0px;
  margin-top: 2px;
  margin-bottom: 0px;
  color: white;
  display: grid;
  padding-left: 10vw;
  padding-right: 10vw;
  grid-template-columns: 20vw 20vw 20vw 20vw;
}

.answers {
  vertical-align: 50%;
  margin: 10px 10px 10px 10px;
  height: 10vh;
  padding-top: 4vh;
  font-size: 55px;
  border-radius: 20px;
}

.playerLi {
  font-size: 60px;
  margin-top: 0px;
  padding-top: 5px;
}
</style>
