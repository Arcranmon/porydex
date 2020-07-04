<template>
    <!-- 70% width to work with -->
    <div>
        <div class="wrapper">
            <div class="pokemon-cell" style="width:33%; float:left; text-align: center;">
                <h1 style="display:inline"> {{pokemon.name}} </h1>
                <img :src="getPokemonImage(pokemon.dexnumber)" style="max-width:100%; max-height:100%"/>
            </div>
            <div class="pokemon-cell" style="width:67%; float:left; text-align: left;">
                <div v-if="!(pokemon.type2)">  <b>Type:</b> {{pokemon.type1}}</div>  
                <div v-else><b>Type:</b> {{pokemon.type1}} / {{pokemon.type2}}</div>
                <b>Favored Skills:</b> {{pokemon.skill1}}, {{pokemon.skill2}}     <br>
                <b>Deficient Skill:</b> {{pokemon.badskill}} <br>
                <b>Home Turf:</b> {{pokemon.turflist}}<br>           
                <div v-if="!(pokemon.gift1)"></div>  
                <div v-else-if="!(pokemon.gift2)"><b>Gift:</b> {{pokemon.gift1}}</div>
                <div v-else><b>Gifts:</b> {{pokemon.gift1}},{{pokemon.gift2}}</div>
                <b>Initiative:</b> {{pokemon.initiative}} <br>
                <b>Movement:</b> {{pokemon.movement}} <span v-if="(pokemon.movementtypes)">{{pokemon.movementtypes}}</span> <br>
                <b>Size:</b> {{pokemon.size}} <br> <br>
                <b>Traits:</b>  {{pokemon.trait1}}, {{pokemon.trait2}} <br>
                <b>Defense Priority:</b> {{pokemon.def1}} > {{pokemon.def2}} > {{pokemon.def3}} <br>
                <b>Basic Attack:</b> {{pokemon.basicattacks}}<br>
            </div>
        </div>
        <div class="wrapper">
           <div class="pokemon-cell" style="width:100%; float:left; text-align: center;">
                <h1 style="display:inline">Roles</h1>
            </div>
        </div>
        <div class="wrapper">
           <div class="pokemon-cell" style="width:33%; float:left; text-align: center;">
                <h3 style="display:inline">{{pokemon.role1}}</h3>
                <vs-collapse>
                </vs-collapse>
            </div>
            <div class="pokemon-cell" style="width:34%; float:left; text-align: center;">
                <h3 style="display:inline">{{pokemon.role2}}</h3>
            </div>
            <div class="pokemon-cell" style="width:33%; float:left; text-align: center;">
                <h3 style="display:inline">{{pokemon.role3}}</h3>
            </div> 
        </div>
        <div class="wrapper">
           <div class="pokemon-cell" style="width:100%; float:left; text-align: center;">
                <h1 style="display:inline">Abilities</h1>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Abilities</v-expansion-panel-header>
                        <v-expansion-panel-content>
                        Blah blah blah
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>


<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'pokemon-stat-display',
    props: {
        pokemon: {
            type: Array,
            required: true,
        },
    },
    methods:{        
        getPokemonImage: function(number){
            return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + number + '.png'
        },
    },      
   
})
</script>

<style scoped>
    .pokemon-cell {
        background-color: darkcyan;
        border: 2px solid darkslategrey;
        font-family:  "Courier New";
        font-size: 18px;
        padding: 10px;
        box-sizing: border-box;
    }
    .wrapper {
        display: flex;
    }
</style>