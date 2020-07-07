<template>
    <div>
        <div class="ability-top" style="width:90%;display:inline-block">
          <h3 style="display:inline;">{{ability.name}}</h3><br>
          <span v-if="(ability.action)">{{ability.action}}, </span>
          {{ability.frequency}}
        </div>
        <div class="ability-bottom"  style="width:90%;display:inline-block">
          <div v-if="(ability.trigger)"><b>Trigger:</b> {{ability.trigger}} <br> </div> 
          <vue-simple-markdown :source="ability.effect" class="ability-bottom" style="border: 0px solid black;padding: 0px;"></vue-simple-markdown>
        </div>
    </div>
</template>


<script>
    import Vue from 'vue'
    import allAbilities from '@/assets/database/abilities.json'

    export default Vue.extend({
        name: 'ability-card',
        props: {
            abilityName: {
                type: String,
                required: true,
            },
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
    font-size: 14px;
    padding: 5px;
    box-sizing: border-box;
    text-align: left;
  }
  .wrapper {
    display: flex;
    text-align: center;
  }
</style>