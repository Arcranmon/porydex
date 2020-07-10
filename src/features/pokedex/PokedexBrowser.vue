<template>
    <div> 
        <div style="width:100%; text-align:center;">
        <div style="text-align:center;font-size:50px;font-family:'Press Start 2P';color:black">POKEDEX</div>
            <h1 style="font-family:'Press Start 2P';color:black">Choose a Pokemon!</h1><br>
            <v-select 
                label="Choose a Pokemon"
                :items="allPokemon"
                hide-details
                item-text="name"  
                v-model="selectedPokemon"      
                outlined        
                return-object
                style="width:95%;  margin-left: auto; margin-right: auto; background:lightcyan">>
            </v-select>
        </div>    
        <div style="width:100%; float:right">
            <pokemon-stat-display :pokemon="selectedPokemon" />
        </div>            
    </div>
</template>


<script>
    import Vue from 'vue'
    import allPokemon from '@/assets/database/pokemon.json'
    import PokemonStatDisplay from './PokemonStatDisplay'

    export default Vue.extend({
    components: {
        PokemonStatDisplay,
    },
    data(){
        return {
            allPokemon,
            selectedPokemon:allPokemon[0]
        }
    },
    })
</script>