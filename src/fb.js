import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyC1wS5DRWdICMRE8UHi4Svkndye2e6o0uI',
  authDomain: 'hn-no-context.firebaseapp.com',
  databaseURL: 'https://hn-no-context.firebaseio.com',
  projectId: 'hn-no-context',
  storageBucket: 'hn-no-context.appspot.com',
  messagingSenderId: '218372684053',
  appId: '1:218372684053:web:ec562262d93bdbcea1911c',
  measurementId: 'G-3ESKQMH1SR'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

db.settings({ timestampsInSnapshots: true })

export default db
