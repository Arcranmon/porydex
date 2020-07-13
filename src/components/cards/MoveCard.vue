<template>
        <v-row no-gutters >
          <v-col cols=12 class="move-top" v-bind:class="[move.type, move.category]">
            <div style="padding:5px">
            <span style="float:right;"><img :src='tierImage' width="46px"/></span>
            <b>{{move.name}} </b> ✦ {{move.type}}<br>
            {{move.action}} ✦ {{move.category}} <span v-if="(move.keywords)"> ✦ {{move.keywords}}</span>
            </div>
          </v-col>
          <v-col cols=12 class="move-bottom" v-bind:class="[move.category]">
              <div style="padding:5px">
                <b>Targets:</b> {{move.target}} <span v-if="(move.defense)"> ✦ vs {{move.defense}}</span> <br>
                <div v-if="(move.hit)"><b>Hit:</b> {{move.hit}}</div> 
                <div v-if="(move.damage)"><b>Hit:</b> {{move.damage}} {{move.damagetype}} {{move.type}} Damage</div> 
                <div v-if="(move.always)"><vue-simple-markdown class="move-format" :source="'**Always:** ' + move.always"/></div> 
                <div v-if="(move.miss)"><vue-simple-markdown class="move-format" :source="'**Miss:** ' +  move.miss" /></div> 
                <div v-if="(move.critical)"><vue-simple-markdown class="move-format" :source="'**Critical or SE:** ' + move.critical" /></div> 
                <div v-if="(move.boost)"><vue-simple-markdown class="move-format" :source="'**Boost:** ' + move.boost" /></div> 
                <div v-if="(move.special)"><vue-simple-markdown class="move-format" :source="'**Special:** '+ move.special"/></div> 
              </div>
          </v-col>
          <v-col v-if="showA == true" cols=12>
            <available :name="moveName" />
          </v-col>
        </v-row>
</template>


<script>
    import Vue from 'vue'
    import 'vue-simple-markdown/dist/vue-simple-markdown.css';
    import allMoves from '@/assets/database/moves.json'
    import Available from './Available.vue'

    export default Vue.extend({
        name: 'move-card',
        props: {
            moveName: {
                type: String,
                required: true,
            },
            showA: {
              type: Boolean,
              required: false,
              default: false
            }
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
        },
        components: {
          Available
        }
    })
</script>


<style scoped>
  *{    
    font-family: "Courier New";
    font-size: 18;
  }
  .move-top {
    border: 2px solid black;
    color: black;
    font-family: "Courier New";
    text-align: left;
    font-size: 18px;
    padding: 10px;
    box-sizing: border-box;
  }
  .move-bottom {
    background-color: #f0f0f0;
    border: 2px solid black;
    border-top: 0px solid black;
    color: black;
    font-family: "Courier New";
    font-size: 14px!important;
    white-space: normal!important;
    padding: 5px;
    box-sizing: border-box;
    text-align: left;
  }
  .move-format {
    font-family: "Courier New";
    font-size: 14px!important;
    white-space: normal!important;
    color: black;
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