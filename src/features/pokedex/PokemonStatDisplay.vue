<template>
    <!-- 70% width to work with -->
    <div style="padding:15px">
        
            <v-row flex fluid fill-height no-gutters class="pokemon-cell"> 
                <v-col cols="12" class="flex flex-column" style="flex-direction:column;" lg="4">
                        <div style="text-align: center;">
                            <h1 style="display:inline"> {{pokemon.name}} - #{{pokemon.dexnumber}} </h1> <br>
                            <div style="margin: auto; width:min-fit">
                                <span>
                                <span class="Type" :class="pokemon.type1">{{pokemon.type1}}</span>
                                <span v-if="pokemon.type2" class="Type" :class="pokemon.type2">{{pokemon.type2}}</span></span><br>
                            </div>
                            <img :src='require("../../assets/pokemon/" + pokemon.dexnumber + ".png")' style="max-width:60%; width: auto; height: auto;"/>
                        </div>
                </v-col>                
                <v-col cols="0" class="flex flex-column" style="flex-direction:column;" lg="1">  
                </v-col>                
                <v-col cols="12" class="flex flex-column" style="flex-direction:column;" lg="7" >
                    <div style="text-align: left;height=100%" >
                        <b>Favored Skills:</b> {{pokemon.skill1}}, {{pokemon.skill2}}     <br>
                        <b>Deficient Skill:</b> {{pokemon.badskill}} <br>
                        <b>Home Turf:</b> <span v-for="i in turflist" :key="i">{{i}}<span v-if="i != turflist[turflist.length-1]">, </span></span><br>
                        <b>Gifts:</b> <span v-for="i in giftlist" :key="i">{{i}}<span v-if="i != giftlist[giftlist.length-1]">, </span></span><br>    
                        <b>Initiative:</b> {{pokemon.initiative}} <br>
                        <b>Movement:</b> {{pokemon.movement}} <span v-if="(pokemon.movementtypes)">{{pokemon.movementtypes}}</span> <br>
                        <b>Size:</b> {{pokemon.size}} <br> <br>
                        <b>Traits:</b>  {{pokemon.trait1}}, {{pokemon.trait2}} <br>
                        <b>Defense Priority:</b> {{pokemon.def1}} > {{pokemon.def2}} > {{pokemon.def3}} <br>
                        <b>Basic Attack:</b> <span v-for="i in attacklist" :key="i">{{i}}<span v-if="i != attacklist[attacklist.length-1]">, </span></span><br> 
                    </div>                    
                </v-col>    
            </v-row>
        <div class="wrapper">
           <div class="pokemon-cell" style="width:100%; text-align: center;">
                <v-expansion-panels >
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
        computed:{
            turflist: function() {
               if('turf2' in this.pokemon){
                   return [this.pokemon.turf1, this.pokemon.turf2]
               } 
               else{
                   return [this.pokemon.turf1]
               }
            },            
            giftlist: function() {
               if('gift2' in this.pokemon){
                   return [this.pokemon.gift1, this.pokemon.gift2]
               } 
               else{
                   return [this.pokemon.gift1]
               }
            },            
            attacklist: function() {
               if('basicattack2' in this.pokemon){
                   return [this.pokemon.basicattack1, this.pokemon.basicattack2]
               } 
               else{
                   return [this.pokemon.basicattack1]
               }
            }
        }  
    
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
        padding: 0px;
        box-sizing: border-box;
    }
    .wrapper {
        display: flex;
    }
</style>