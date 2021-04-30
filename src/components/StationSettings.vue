<template>
    <form class="add-event-form" @submit.prevent="" action="">
        <button @click="$router.back()" class="btn btn-secondary">Back</button>        
        <br>
        {{scheduleStation.number}}-{{scheduleStation.label}}
        <span class="badge bg-primary" v-if="scheduleStation.on">Running</span>
        <span class="badge bg-secondary" v-if="!scheduleStation.on">Off</span>


        <h3>Add Watering Event</h3>

        <div class="btn-group day-select" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="day" id="btnradio1" value="monday" v-model="day" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradio1">Mo</label>

            <input type="radio" class="btn-check" name="day" id="btnradio2" value="tuesday" v-model="day" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2">Tu</label>

            <input type="radio" class="btn-check" name="day" id="btnradio3" value="wednesday" v-model="day" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio3">Wed</label>

            <input type="radio" class="btn-check" name="day" id="btnradio4" value="thursday" v-model="day" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio4">Th</label>

            <input type="radio" class="btn-check" name="day" id="btnradio5" value="friday" v-model="day" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio5">Fr</label>

            <input type="radio" class="btn-check" name="day" id="btnradio6" value="saturday" v-model="day" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio6">Sa</label>

            <input type="radio" class="btn-check" name="day" id="btnradio7" value="sunday" v-model="day" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio7">Su</label>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Start Time</span>
            <input type="time" class="form-control" v-model="startTime" aria-label="Start Time" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Duration</span>
            <input type="number" v-model="duration" class="form-control" aria-label="duration in minutes">
            <span class="input-group-text">min</span>
        </div>

        <button class="btn btn-primary" @click="launchNewEvent">Add</button>
    </form>

    <Day day="Monday" :stationNumber="stationNumber" :stationEvents="scheduleStation.monday"/>
    <Day day="Tuesday" :stationNumber="stationNumber" :stationEvents="scheduleStation.tuesday"/>
    <Day day="Wednesday" :stationNumber="stationNumber" :stationEvents="scheduleStation.wednesday"/>
    <Day day="Thursday" :stationNumber="stationNumber" :stationEvents="scheduleStation.thursday"/>
    <Day day="Friday" :stationNumber="stationNumber" :stationEvents="scheduleStation.friday"/>
    <Day day="Saturday" :stationNumber="stationNumber" :stationEvents="scheduleStation.saturday"/>
    <Day day="Sunday" :stationNumber="stationNumber" :stationEvents="scheduleStation.sunday"/>

</template>

<script>
  import Day from './StationParts/Day.vue'
  
export default {
  
  name: 'StationSettings',
  components: {
    Day
  },
  props: [
    
  ],
  data() {
      return {
          stationNumber: -1,
          day: 'monday',
          startTime: '06:00',
          duration: 20
      }
  },
  computed: {
    scheduleStation() { 
      return this.$store.getters['getStation'+this.stationNumber]
    },
  },
  methods: {
    backToControlBoard() {
        this.$router.push('/')
    },
    launchNewEvent() {
        this.$store.dispatch('createStationEvent', {stationNumber: this.stationNumber, day: this.day, startTime: this.startTime, duration: this.duration})

    }
  },
  created() {
    //   this.$route.path
    const stationNumber = this.$route.params.stationNumber
    this.stationNumber = stationNumber
  }
}
</script>

<style scoped>
    .day-select {
        margin-bottom: 18px;
    }
    .add-event-form {
        margin-bottom: 20px;
    }
</style>