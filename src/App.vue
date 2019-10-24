<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
  components: {
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
  color: #283e55;
  min-height: 100vh;
}

.homeButton {
  background: rgb(121, 141, 255);
  border: 0px;
  border-radius: 10px;
  height: 40px;
  width: 100px;
}
</style>
