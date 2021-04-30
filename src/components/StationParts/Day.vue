<template>
    <div class="day" v-if="stationEvents">
        <h3>{{day}}</h3>
        <div v-for="stationEvent in stationEvents" :key="stationEvent.id">
            <Event :eventId="stationEvent.id" :day="day" :stationNumber="stationNumber" :startTime="stationEvent.startTime" :duration="stationEvent.duration"/>
        </div>
    </div>
</template>

<script>
  import Event from './Event.vue'
  
  export default {
  name: 'Day',
  components: {
    Event
  },
  props: [
    'day',
    'stationEvents',
    'stationNumber'
  ],
  data() {
    return {

    }
  },
}
</script>

<style scoped>
    .day {
        border-top: 1px solid #ccc;
    }
    .day:nth-of-type(1) {
        border-top: none;
    }
</style>