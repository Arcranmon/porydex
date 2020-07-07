<template>
  <div class="wrapper" style="width:100%">
      <div v-for="mn in moveNames" :key="mn" style="width:100%">
        <move-card :moveName='mn'/>
      </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import MoveCard from './MoveCard'

  export default Vue.extend({
      name: 'show-moves',
      props: {
          moveNames: {
              type: Array,
              required: true,
          },
      },
      components:{
          MoveCard
      },    
  })
</script>

<style scoped>
  *{    
    font-family: "Courier New";
    font-size: 18;
  }
  .ability-top {
    background-color: #9dc1b7;
    border: 2px solid black;
    font-family: "Courier New";
    font-size: 18px;
    padding: 10px;
    box-sizing: border-box;
  }
  .ability-bottom {
    background-color: #f0f0f0;
    border: 2px solid black;
    font-family: "Courier New";
    font-size: 18px;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
  }
  .wrapper {
    display: flex;
    text-align: center;
  }
</style>