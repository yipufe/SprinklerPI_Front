<template>
 <!-- <div class="message-bar">Tap and hold for settings</div> -->
  <div class="Station-Grid">
    <Station :schedule="scheduleStation1" @click="linkToStation(1, scheduleStation1.disabled)"/>
    <Station :schedule="scheduleStation2" @click="linkToStation(2, scheduleStation2.disabled)"/>
    <Station :schedule="scheduleStation3" @click="linkToStation(3, scheduleStation3.disabled)"/>
    <Station :schedule="scheduleStation4" @click="linkToStation(4, scheduleStation4.disabled)"/>
    <Station :schedule="scheduleStation5" @click="linkToStation(5, scheduleStation5.disabled)"/>
    <Station :schedule="scheduleStation6" @click="linkToStation(6, scheduleStation6.disabled)"/>
    <Station :schedule="scheduleStation7" @click="linkToStation(7, scheduleStation7.disabled)"/>
    <Station :schedule="scheduleStation8" @click="linkToStation(8, scheduleStation8.disabled)"/>
  </div>
    
</template>

<script>
import Station from './Station.vue'

export default {
  name: 'ControlBoard',
  components: {
    Station
  },
  data() {
    return {

    }
  },
  methods: {
      //Link to station number unless station is disabled
      linkToStation(stationNumber, disabledStation) {
          if(!disabledStation)
            this.$router.push('/station/'+stationNumber)
      }
  },
  computed: {
    scheduleStation1() { 
      return this.$store.getters.getStation1
    },
    scheduleStation2() { 
      return this.$store.getters.getStation2
    },
    scheduleStation3() { 
      return this.$store.getters.getStation3
    },
    scheduleStation4() { 
      return this.$store.getters.getStation4
    },
    scheduleStation5() { 
      return this.$store.getters.getStation5
    },
    scheduleStation6() { 
      return this.$store.getters.getStation6
    },
    scheduleStation7() { 
      return this.$store.getters.getStation7
    },
    scheduleStation8() { 
      return this.$store.getters.getStation8
    },
  },
}
</script>

<style scoped>
.Station-Grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  column-gap: 15px;
  row-gap: 15px;
  height: 100vh;
}
.message-bar {
  background-color: rgb(0, 0, 92);
  color: white;
}
</style>