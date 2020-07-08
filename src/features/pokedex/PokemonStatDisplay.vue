<template>
    <!-- 70% width to work with -->
    <div style="padding:15px">
        <div class="wrapper">
            <div class="pokemon-cell" style="width:33%; float:left; text-align: center;">
                <h1 style="display:inline"> {{pokemon.name}} </h1> <br>
                <img :src="getPokemonImage(pokemon.dexnumber)" style="max-width:60%; max-height:100%"/>
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
           <div class="pokemon-cell" style="width:100%; text-align: center;">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header expand-icon='mdi-chevron-down' class='pokemon-cell-dropdown'><h1>Roles</h1></v-expansion-panel-header>
                        <v-expansion-panel-content class="pokemon-cell-dropdown-interior"> 
                            <show-cards :names='parseRoles(pokemon)' job="Role"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div> 
        </div>
        <div class="wrapper">
           <div class="pokemon-cell" style="width:100%; float:left; text-align: center;">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header expand-icon='mdi-chevron-down' class='pokemon-cell-dropdown'><h1>Abilities</h1></v-expansion-panel-header>
                        <v-expansion-panel-content class="pokemon-cell-dropdown-interior">
                            <show-cards :names='parseAbilities(pokemon)' job="Ability"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
        <div class="wrapper">
           <div class="pokemon-cell" style="width:100%; float:left; text-align: center;">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header expand-icon='mdi-chevron-down' class='pokemon-cell-dropdown'><h1>Starting Moves</h1></v-expansion-panel-header>
                        <v-expansion-panel-content class="pokemon-cell-dropdown-interior">
                            <show-cards :names='parseMoves(pokemon, 0, false)' job="Move"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>        
        <div class="wrapper">
           <div class="pokemon-cell" style="width:100%; float:left; text-align: center;">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header expand-icon='mdi-chevron-down' class='pokemon-cell-dropdown'><h1>Natural Moves</h1></v-expansion-panel-header>
                        <v-expansion-panel-content class="pokemon-cell-dropdown-interior">      
                                <show-cards :names='parseMoves(pokemon, 1, false)' job="Move"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
        
        <div class="wrapper">
           <div class="pokemon-cell" style="width:100%; float:left; text-align: center;">
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header expand-icon='mdi-chevron-down' class='pokemon-cell-dropdown'><h1>Tutor Moves</h1></v-expansion-panel-header>
                        <v-expansion-panel-content class="pokemon-cell-dropdown-interior">
                                <show-cards :names='parseMoves(pokemon, 1, true)' job="Move"/>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>


<script>
    import Vue from 'vue'
    import ShowCards from '@/components/cards/ShowCards'

    export default Vue.extend({
        name: 'pokemon-stat-display',
        components: {
            ShowCards
        },
        props: {
            pokemon: {
                type: Object,
                required: true,
            },
        },
        methods:{        
            getPokemonImage: function(number){
                return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + number + '.png'
            },
            parseAbilities: function(pokemon){
                if (!pokemon.ability2){
                    return [pokemon.ability1]}
                else{
                    return [pokemon.ability1, pokemon.ability2]}
            },  
            parseMoves: function(pokemon, tier, tutor){
                if(tier == 0){
                    return [pokemon.smove1, pokemon.smove2, pokemon.smove3]
                }
                if(tier == 1 && tutor == 0){
                    return [pokemon.t1natmove1, pokemon.t1natmove2, pokemon.t1natmove3]
                }            
                if(tier == 1 && tutor == 1){
                    return [pokemon.t1tutmove1, pokemon.t1tutmove2]
                }
            },  
            parseRoles: function(pokemon){
                return [pokemon.role1, pokemon.role2, pokemon.role3]
            }
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
    .pokemon-cell-dropdown {
        color: white;
        background-color: rgb(1, 95, 95);
        border: 2px solid darkslategrey;
        font-family:  "Courier New";
        font-size: 18px;
        padding: 5px;
        box-sizing: border-box;
    }
    .pokemon-cell-dropdown-interior {
        color: black;
        background-color: rgb(136, 212, 212);
        border: 2px solid darkslategrey;
        font-family:  "Courier New";
        font-size: 18px;
        box-sizing: border-box;
    }
    .wrapper {
        display: flex;
    }
</style>