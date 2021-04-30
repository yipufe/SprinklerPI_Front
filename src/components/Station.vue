<template>
    <div :class="buttonClasses">
      <div class="button-top"><span></span></div>
      <div class="button-center">{{schedule.number}}</div>
      <div class="button-bottom">{{schedule.label}}</div>
    </div>
</template>

<script>
export default {
  name: 'Station',
  props: [
    'schedule'
  ],
  data() {
      return {
          
      }
  },
  computed: {
    buttonClasses() {
      let btnClass = "Station-Button"
      btnClass += this.schedule.on?" station-active":""
      btnClass += this.schedule.disabled?" station-disabled":""
      return btnClass
    }
  }
}
</script>

<style scoped>
  .Station-Button {
    color: #ccf;
    /*border: 2px solid #3336;*/
    background-color: #001992;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    user-select: none;
  }
  .station-active {
    background-color: #b7eeff;
    color: #001992
  }
  .station-disabled {
    background-color: #555;
    color: #aaa;
  }
  .button-center {
    font-size: 40px;
    font-weight: bold;
  }
</style>