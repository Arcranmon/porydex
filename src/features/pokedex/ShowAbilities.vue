<template>
  <div class="wrapper" style="width:100%">
      <div v-for="ability in abilities" :key="ability.name" style="width:100%">
        <div class="ability-top" style="width:90%;">
          <h3 style="display:inline;">{{ability.name}}</h3><br>
          <span v-if="(ability.action)">{{ability.action}}, </span>
          {{ability.frequency}}
        </div>
        <div class="ability-bottom"  style="width:90%">
          <div v-if="(ability.trigger)"><b>Trigger:</b> {{ability.trigger}} <br> </div> 
          <vue-simple-markdown :source="ability.effect" style="font-family:Courier New; font-size:18px"></vue-simple-markdown>
        </div>
      </div>
  </div>
</template>

<script>
    import Vue from 'vue'
    import allAbilities from '@/assets/database/abilities.json'

    export default Vue.extend({
        name: 'show-moves',
        props: {
            abilitiesRef: {
                type: Array,
                required: true,
            },
        },
        data() {  
            return {
                allAbilities,
            }

        },
        computed: {
            abilities: function() {
                var abls = []
                for(const arr of this.allAbilities){
                  if(this.abilitiesRef.includes(arr.name)){
                    abls.push(arr)
                  }
                }
                return abls
            }
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
    padding: 5px;
    box-sizing: border-box;
    text-align: left;
  }
  .wrapper {
    display: flex;
    text-align: center;
  }
</style>