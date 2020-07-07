<template>
    <div>
        <div class="move-top" v-bind:class="[move.type, move.category]" style="width:95%;display: inline-block">
          <inline style="float:right;"><img :src='tierImage' width="46px"/></inline>
          <b>{{move.name}} </b> ✦ {{move.type}}<br>
          {{move.action}} ✦ {{move.category}} <span v-if="(move.keywords)"> ✦ {{move.keywords}}</span>
        </div>
        <div class="move-bottom" v-bind:class="[move.category]" style="width:95%;display: inline-block">
            <b>Targets:</b> {{move.target}} <span v-if="(move.defense)"> ✦ vs {{move.defense}}</span> <br>
            <div v-if="(move.hit)"><b>Hit:</b> {{move.hit}}</div> 
            <div v-if="(move.damage)"><b>Hit:</b> {{move.damage}} {{move.damagetype}} {{move.type}} Damage</div> 
            <div v-if="(move.always)"><vue-simple-markdown :source="'**Always:** ' + move.always" style="font-family:Courier New; font-size:18px;white-space: normal"/></div> 
            <div v-if="(move.miss)"><vue-simple-markdown :source="'**Miss:** ' +  move.miss" style="font-family:Courier New; font-size:18px;white-space: normal"/></div> 
            <div v-if="(move.critical)"><vue-simple-markdown :source="'**Critical or SE:** ' + move.critical" style="font-family:Courier New; font-size:18px;white-space: normal"/></div> 
            <div v-if="(move.boost)"><vue-simple-markdown :source="'**Boost:** ' + move.boost" style="font-family:Courier New; font-size:18px;white-space: normal;display:inline"/></div> 
            <div v-if="(move.special)"><vue-simple-markdown :source="'**Special:** '+ move.special" style="font-family:Courier New; font-size:18px;white-space:normal;display:inline"/></div> 
        </div>
    </div>
</template>


<script>
    import Vue from 'vue'
    import 'vue-simple-markdown/dist/vue-simple-markdown.css';
    import allMoves from '@/assets/database/moves.json'

    export default Vue.extend({
        name: 'move-card',
        props: {
            moveName: {
                type: String,
                required: true,
            },
        },  
        data() {  
            return {
                allMoves,
            }

        },
        computed: {
            move: function(){
                for(const mv of this.allMoves){
                    if(this.moveName == mv.name){
                        return mv
                    }
                }
            },
            tierImage: function(){
                return require("../../assets/tier" + this.move.tier + ".png")
            }
        }
    })
</script>


<style scoped>
  *{    
    font-family: "Courier New";
    font-size: 18;
  }
  .move-top {
    background-color: #9dc1b7;
    border: 2px solid black;
    border: 2px solid black;
    font-family: "Courier New";
    text-align: left;
    font-size: 18px;
    padding: 10px;
    box-sizing: border-box;
  }
  .move-bottom {
    background-color: #f0f0f0;
    border: 2px solid black;
    font-family: "Courier New";
    font-size: 18px;
    padding: 5px;
    box-sizing: border-box;
    text-align: left;
  }
  .Normal{
    background-color: #C6C6A7;
  }
  .Fire{
    background-color: #F5AC78;
  }
  .Water{
    background-color: #9DB7F5;
  }
  .Grass{
    background-color: #A7DB8D;
  }
  .Electric{
    background-color: #FAE078;
  }
  .Dark{
    background-color: #A29288;
  }
  .Fighting{
    background-color: #D67873;
  }
  .Psychic{
    background-color: #FA92B2;
  }
  .Fairy{
    background-color: #F4BDC9;
  }
  .Bug{
    background-color: #C6D16E;
  }
  .Ghost{
    background-color: #A292BC;
  }
  .Dragon{
    background-color: #A27DFA;
  }
  .Ice{
    background-color: #BCE6E6;
  }
  .Rock{
    background-color: #D1C17D;
  }
  .Ground{
    background-color: #E0C068;
  }
  .Steel{
    background-color: #D1D1E0;
  }
  .Flying{
    background-color: #C6B7F5;
  }  
  .Maneuver{
    border-left: 5px solid #00991c;
  } 
  .Strike{
    border-left: 5px solid #990000;
  } 
  .Trick{
    border-left: 5px solid #006199; 
  }
  .wrapper {
    display: flex;
    text-align: center;
  }
</style>