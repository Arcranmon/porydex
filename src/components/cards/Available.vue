<template>
        <v-row no-gutters >
            <v-col cols=12 class="top">
              <div style="padding:5px">
                <b>Available To:</b> <span v-for="n in namelist" :key="n">{{n}}<span v-if="n != namelist[namelist.length-1]">, </span></span>
              </div>
            </v-col>
        </v-row>
</template>


<script>
    import Vue from 'vue'
    import allPokemon from '@/assets/database/pokemon.json'

    export default Vue.extend({
        name: 'available',
        props: {
            name: {
                type: String,
                required: true,
            },
        },
        data() {  
            return {
                allPokemon,
            }

        },
        computed: {
            namelist: function() {
                var pklist = []
                for(const pkm of this.allPokemon){
                    if(Object.values(pkm).includes(this.name)){
                        pklist.push(pkm.name)
                  }
                }
                return pklist
            }
        },
    
    })
</script>

<style scoped>
  .top {
    background-color: lightgrey;
    border: 2px solid black;
    border-top: 0px solid black;
    color: black;
    font-family: "Courier New";
    font-size: 14px;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
  }
</style>