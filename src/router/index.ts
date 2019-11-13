import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/player',
    name: 'player',
    component: () => import('../views/Player.vue')
  },
  {
    path: '/host',
    name: 'host',
    component: () => import('../views/Host.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../views/Quiz.vue')
  },
  {
    path: '/playerQuiz',
    name: 'playerQuiz',
    component: () => import('../views/PlayerQuiz.vue')
  },
  {
    path: '/answer',
    name: 'answer',
    component: () => import('../views/Answer.vue')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('../views/Score.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
