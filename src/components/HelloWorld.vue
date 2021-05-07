<template>
  <h1>Testo: {{messaggio}} : {{id}}</h1>
  <button @click="inc()">incrementa</button>
</template>

<script>
export default {
  data(){
    return{
      id:0,
      messaggio: "prova"
    }
  },
  methods: {
      inc(){
        this.id++
      }

    }
  }
</script>

<style>

</style>