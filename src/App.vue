<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      polling: null
    }
  },
  created: function() {
    const numberOfStations = 8
    //Load all station schedules
    for(let stationNumber=1; stationNumber<=numberOfStations; stationNumber++) {
      this.$store.dispatch('loadStation', {stationNumber})
    }

    this.polling = setInterval(()=>{
      const numberOfStations = 8
      //Load all station schedules
      for(let stationNumber=1; stationNumber<=numberOfStations; stationNumber++) {
        this.$store.dispatch('loadStation', {stationNumber})
      }
    }, 5000)

  },
  beforeUnmount: function() {
    clearInterval( this.polling )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
}

</style>
