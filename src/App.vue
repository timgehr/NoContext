<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './views/HelloWorld.vue'

export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  background: rgb(218, 224, 226);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a2530;
  margin-top: 60px;
}
</style>
