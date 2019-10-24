<template>
  <div id="home">
    <div style="background: rgb(235, 239, 240); height: fit-content;">
      <img src="@/assets/NoContext2.png"/>
    </div>
    <div class="buttonCont">
      <router-link to="/player" tag="button" class="homeButton hb1">JOIN A GAME</router-link>
    </div>
    <div class="buttonCont">
      <router-link to="/host" tag="button" class="homeButton hb2">START NEW GAME</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
  }
})
</script>

<style>

img {
  max-height: 240px;
  max-width: 90%
}

#home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.buttonCont {
  margin-top: 50px;
  margin-bottom: 20px;
}

.homeButton {
  transition: all 0.1s;
  color: white;
  padding: 20px;
  font-size: calc(20px + 4vh);
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0px;
  border-radius: 28px;
  height: 30vh;
  min-width: 50vw;
  width: 400px;
}

.hb1:hover {
  background: rgb(84, 153, 67);
}

.hb2:hover {
  background: rgb(70, 86, 175);
}

.hb1 {
  background: rgb(71, 134, 56);
  box-shadow: 0px 13px rgb(46, 88, 35);
}

.hb2 {
  background: rgb(57, 72, 158);
  box-shadow: 0px 13px rgb(33, 46, 107);
}

.homeButton:focus {
  outline: 0px;
}

.homeButton:active {
  transition: all 0.1s;
  margin-top: 20px;
  margin-bottom: 0px;
  box-shadow: 0px 0px;
}

.hb1:active {
  box-shadow: 0px 3px rgb(46, 88, 35);
}

.hb2:active {
  box-shadow: 0px 3px rgb(33, 46, 107);
}

.title {
  font-size: 50px;
}
</style>
