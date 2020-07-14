<template>
        <div class="move--wrapper" inline>
          <div class="move--header" v-bind:class="[move.type, move.category]">           
            <span class="move--icon"><img :src='tierImage'/></span>
            <b>{{move.name}} </b> ✦ {{move.type}}<br>
            {{move.action}} ✦ {{move.category}} <span v-if="(move.keywords)"> ✦ {{move.keywords}}</span> 
          </div>
          <div class="move--content" v-bind:class="[move.category]">
                <b>Targets:</b> {{move.target}} <span v-if="(move.defense)"> ✦ vs {{move.defense}}</span> <br>
                <div v-if="(move.hit)"><b>Hit:</b> {{move.hit}}</div> 
                <div v-if="(move.damage)"><b>Hit:</b> {{move.damage}} {{move.damagetype}} {{move.type}} Damage</div> 
                <div v-if="(move.always)"><vue-simple-markdown class="move--format" :source="'**Always:** ' + move.always"/></div> 
                <div v-if="(move.miss)"><vue-simple-markdown class="move--format" :source="'**Miss:** ' +  move.miss" /></div> 
                <div v-if="(move.critical)"><vue-simple-markdown class="move--format" :source="'**Critical or SE:** ' + move.critical" /></div> 
                <div v-if="(move.boost)"><vue-simple-markdown class="move--format" :source="'**Boost:** ' + move.boost" /></div> 
                <div v-if="(move.special)"><vue-simple-markdown class="move--format" :source="'**Special:** '+ move.special"/></div> 
          </div>
          <div v-if="showA == true">
            <available :name="moveName" />
          </div>
        </div>
</template>


<script>
    import Vue from 'vue'
    import 'vue-simple-markdown/dist/vue-simple-markdown.css';
    import allMoves from '@/assets/database/moves.json'
    import '@/styles/types.scss'
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


<style scoped lang="scss">
  .move--wrapper {
    font-family: $font--standard;
  }
  .move--header {
    border: 2px solid black;
    color: black;
    text-align: left;
    font-size: $font-size--l;
    padding: $space--xs;
    width: 100%;
  }
  .move--content {
    background-color: #f0f0f0;
    border: 2px solid black;
    border-top: 0px solid black;
    color: black;
    padding: $space--xs;
    text-align: left;
    width: 100%;
  }
  .move--format {
    white-space: normal;
    font-family: $font--standard;
    text-align: left;
  }  
  .move--icon {
    float: right;
  }
  .Maneuver{
    border-left: 5px solid $color--maneuver;
  } 
  .Strike{
    border-left: 5px solid $color--strike;
  } 
  .Trick{
    border-left: 5px solid $color--trick; 
  }
</style>