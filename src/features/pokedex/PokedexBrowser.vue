<template>
    <div> 
        <div style="width:15%; float:left">
            <v-select 
                label="name"
                :options="allPokemon"
                v-model="selectedPokemon"
                class='dex-scroll'>
            </v-select>
        </div>    
        <div style="width:70%; float:right">
            <pokemon-stat-display :pokemon="selectedPokemon" />
        </div>    
    </div>
</template>


<script>
    import Vue from 'vue'
    import allPokemon from './randomPokemon.json'
    import PokemonStatDisplay from './PokemonStatDisplay'

    export default Vue.extend({
    components: {
        PokemonStatDisplay
    },
    data(){
        return {
            allPokemon,
            selectedPokemon: allPokemon[0]
        }
    },
    })
</script>

<style>
    .dex-scroll {
        background-color: lightcyan;
    }

    .dex-scroll .vs__dropdown-menu {
        background-color: lightcyan;
    }
</style>