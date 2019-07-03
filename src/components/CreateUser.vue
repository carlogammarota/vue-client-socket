<template>
   <div>
       <!-- <p>Nombre</p>
        <input type="text" v-model="player.nombre">
       <p>Color</p>
        <input type="color"  v-model="player.color">
        <br>
        <button @click="CrearPlayer()">Crear Jugador</button> -->
   </div>
</template>
<script>
export default {
    data(){
        return {
            player: {}
        }
    },
    methods: {
        CrearPlayer(){
            console.log("Player")
        }
    }
}
</script>

<style>

</style>
