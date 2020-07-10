<template>
        <v-row no-gutters >
            <v-col cols=12 class='ability-top'>
            <div style="padding:5px">
              <h3 style="display:inline;">{{ability.name}}</h3><br>
              <span v-if="(ability.action)">{{ability.action}}, </span>
              {{ability.frequency}}
            </div>
            </v-col>            
            <v-col cols=12 class="ability-bottom" >
              <div style="padding:5px">
                <span v-if="(ability.trigger)"><b>Trigger:</b> {{ability.trigger}} <br> <br></span> 
                <vue-simple-markdown :source='ability.effect' class="ability-bottom" style="border: 0px solid black;padding: 0px;"></vue-simple-markdown>
              </div>
            </v-col>            
            <v-col v-if="showA == true" cols=12>
              <available :name="abilityName" />
            </v-col>
        </v-row>
</template>


<script>
    import Vue from 'vue'
    import allAbilities from '@/assets/database/abilities.json'
    import Available from './Available'

    export default Vue.extend({
        name: 'ability-card',
        props: {
            abilityName: {
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
                allAbilities,
            }

        },
        computed: {
            ability: function() {
                var abls = []
                for(const arr of this.allAbilities){
                  if(this.abilityName == arr.name){
                    return arr
                  }
                }
            }
        },
        components:{
          Available
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
    color: black;
    font-family: "Courier New";
    font-size: 18px;
    padding: 10px;
    box-sizing: border-box;
  }
  .ability-bottom {
    background-color: #f0f0f0;
    color: black;
    border: 2px solid black;
    font-family: "Courier New";
    font-size: 14px;
    padding: 5px;
    box-sizing: border-box;
    text-align: left;
    display: inline;
    white-space: normal;
  }
  .wrapper {
    display: flex;
    text-align: center;
  }
</style>