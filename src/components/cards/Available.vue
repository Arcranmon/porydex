<template>
        <v-row no-gutters >
            <v-col cols=12 class="top">
                <v-expansion-panels >
                    <v-expansion-panel>                            
                        <v-expansion-panel-header expand-icon='mdi-chevron-down' class='top'><b>Available To:</b></v-expansion-panel-header>
                            <v-expansion-panel-content class="top">  <span v-for="n in namelist" :key="n">{{n}}<span v-if="n != namelist[namelist.length-1]">, </span></span>  </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
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
    border: 1px solid black;
    white-space: normal;
    border-top: 0px solid black;
    border-radius: 0px;
    color: black;
    font-family: "Courier New";
    font-size: 14px;
    padding: 2px;
    box-sizing: border-box;
    text-align: left;
  }
</style>