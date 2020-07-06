<template>
  <div class="wrapper" style="width:100%">
      <div v-for="move in moves" :key="move.name" style="width:100%">
        <move-card :move='move'/>
      </div>
  </div>
</template>

<script>
    import Vue from 'vue'
    import allMoves from '@/assets/database/moves.json'
    import MoveCard from './MoveCard'

    export default Vue.extend({
        name: 'show-moves',
        props: {
            movesRef: {
                type: Array,
                required: true,
            },
        },
        data() {  
            return {
                allMoves,
            }

        },
        computed: {
            moves: function() {
                var mvs = []
                for(const mv of this.allMoves){
                  if(this.movesRef.includes(mv.name)){
                    mvs.push(mv)
                  }
                }
                return mvs
            }
        },
        components:{
            MoveCard
        }
    
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