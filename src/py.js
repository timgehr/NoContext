// import db from '@/fb'

const fs = require('fs')

var INFO = ['', '', '', '', '', '', '']

var HECKINNERDS = [' BryceRombach', ' EthanBrody', ' StoneBrackett', ' PaxtonLeaf',
  ' NateWoo', ' BenGochanour', ' BrettFrancis', ' JordanZimmerman',
  ' PerryPowell', ' AlexParsells', ' JamesMartindale', ' TimGehrsitz',
  ' ErikFretland', ' JacobLuft']

var lineno = Math.ceil(Math.random() * 13912)

var textByLine = fs.readFileSync('DataParsed.txt').toString().split('\n')

var line = textByLine[lineno]

var sectionBreaks = []

var round = {
  play () {
    var i
    for (i = 0; i < line.length; i++) {
      if (line[i] === '|' && sectionBreaks.length < 1) {
        sectionBreaks.push(i)
      }
      if (line[i] === '|' && sectionBreaks.length === 1) {
        sectionBreaks.push(i)
      }
      if (line[i] === '|' && sectionBreaks.length === 2) {
        sectionBreaks.push(i)
      }
      if (line[i] === '|' && sectionBreaks.length === 3) {
        sectionBreaks.push(i)
      }
      if (line[i] === '|' && sectionBreaks.length === 4) {
        sectionBreaks.push(i)
      }
      if (line[i] === '|' && sectionBreaks.length === 5) {
        sectionBreaks.push(i)
      }
    }

    INFO[0] = line.slice(0, (sectionbreaks[0] - 1)) // MessageType
    INFO[1] = line.slice((sectionbreaks[0] + 1), (sectionbreaks[1] - 1)) // AVATARURL
    INFO[2] = line.slice((sectionbreaks[1] + 1), (sectionbreaks[2] - 1)) // TIMESTAMP
    INFO[3] = line.slice((sectionbreaks[2] + 1), (sectionbreaks[3] - 1)) // LIKES
    INFO[4] = line.slice((sectionbreaks[3] + 1), (sectionbreaks[4] - 1)) // NICKNAME
    INFO[5] = line.slice((sectionbreaks[4] + 1), (sectionbreaks[5] - 1)) // SENTBY
    INFO[6] = line.slice((sectionbreaks[5] + 1), line.length + 1) // MESSAGE

    var indices = [0, 0, 0, 0]
    indices[0] = HECKINNERDS.indexOf(INFO[5]) // Correct Answer

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

    var correctAnswer = order.indexOf(0)

    /*
    db.collection('quiz').doc('quiz').update({
      ans1: HECKINNERDS[indices[order[0]]],
      ans2: HECKINNERDS[indices[order[0]]],
      ans3: HECKINNERDS[indices[order[0]]],
      ans4: HECKINNERDS[indices[order[0]]],
      correct: correctAnswer,
      evonein: false
    })
    */
  }
}

const quiz = {
  ans1: 1, // HECKINNERDS[indices[order[0]]],
  ans2: 2, // HECKINNERDS[indices[order[0]]],
  ans3: 4, // HECKINNERDS[indices[order[0]]],
  ans4: 3, // HECKINNERDS[indices[order[0]]],
  correct: 2, // correctAnswer,
  evonein: true // false
}

export default quiz
