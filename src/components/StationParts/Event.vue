<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Start Time:</strong> {{startTimeDisplayable}} <strong>Duration:</strong> {{duration}}min
    <button @click="removeEvent(stationNumber, day, eventId)" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Remove"></button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
  name: 'Event',
  props: [
    'startTime',
    'duration',
    'eventId',
    'day',
    'stationNumber'
  ],
  data() {
    return {

    }
  },
  computed: {
    startTimeDisplayable() {
      let [hour, min] = this.startTime.split(":")
      let hourNum = parseInt(hour)
      let meridiem = "AM"
      if(hourNum>=12) {
        meridiem = "PM"
        hourNum-=12
      }
      if(hourNum==0)
        hourNum=12
      return hourNum+":"+min+meridiem
    }
  },
  methods: {
    removeEvent(station, day, eventId) {
      day = day.toLowerCase()
      console.log(station, day, eventId)
      this.$store.dispatch('deleteStationEvent', {stationNumber:station, day, eventId})
      this.deleteStationEvent({stationNumber:station, day, eventId})
    },
    ...mapMutations([
      'deleteStationEvent'
    ]),
  }
}
</script>

<style scoped>

</style>