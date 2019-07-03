import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

// import './assets/css/tailwind.css'


Vue.use(new VueSocketIO({
  debug: true,
  // connection: 'http://localhost',
  connection: 'https://node-server-socket.herokuapp.com/',
  // vuex: {
  //     actionPrefix: 'SOCKET_',
  //     mutationPrefix: 'SOCKET_'
  // },
  // options: { path: "/src/" } //Optional options
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
