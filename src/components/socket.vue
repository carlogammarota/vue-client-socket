<template>
    <div>
        <CreateUser></CreateUser>
        <!-- <googleMap></googleMap> -->
        {{getLocation}}
        players {{players}}
        <div @mousemove="MouseMove($event)" class="game">
            <!-- <h4>Game</h4> -->
                <div :style="{'left': screenX,'top': screenY }" class="player"></div>
          
            
        </div>
        <ul v-for="message in messages">
            <li>{{message}}</li>
        </ul>
        
        <input type="text" v-model="text">
        <button @click="clickButton($event)">CLICK BUTTON</button>
    </div>
</template>

<script>
import CreateUser from './CreateUser.vue'
export default {
    components: {
        CreateUser
    },
    data(){
        return {
            text: "",
            messages: [],
            screenX: 0,  screenY: 0,
            players: []
        }
    },
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        },
        requestMensajes: function (data){
            // this.messages.push(data)
            this.messages = data
            console.log("data", data)
        },
        getPosition: function (data){
            // this.players.push(data)
            this.screenX = data.x
            this.screenY = data.y
        }
    },
    computed: {
        getLocation: function(){
            this.$getLocation({
                enableHighAccuracy: false, //defaults to false
                timeout: Infinity, //defaults to Infinity
                maximumAge: 0 //defaults to 0
            })
            .then(coordinates => {
                return coordinates
                console.log(coordinates);
            });
        }
    },
    methods: {
        MouseMove(event){
            // console.log(event)
            // this.screenX = event.screenX + "px"
            // this.screenY = event.screenY -100 + "px" 

            this.$socket.emit('PositionMouse', {x:event.screenX + "px",y:event.screenY -100 + "px" })
        },
        clickButton: function (event) {

            console.log("location", this.getLocation)
            
            // console.log(event); 
            // console.log("button")
            // $socket is socket.io-client instance
            this.$socket.emit('LlegadaDeMensaje', this.text)
            // this.$socket.on('news', function (data) {
            //     console.log(data);
            //     this.$socket.emit('my other event', { my: 'data' });
            // });
            //  this.$socket.on('news', function (data) {
            //     console.log("data.hello")
            // })
        }
    }
}
</script>

<style>

    .game {
        width: 100%;
        height: 500px;
        background-color:antiquewhite
    }
    .player {
        width: 40px;
        height: 40px;
        border: solid 1px black;
        background-color: blue;
        position: absolute
    }
</style>
