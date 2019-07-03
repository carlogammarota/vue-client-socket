<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <create-user></create-user> -->
    <socket></socket>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import socket from './components/socket.vue'


export default {
  // eslint-disable-next-line
  name: 'app',
  components: {
    // HelloWorld
    socket
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
