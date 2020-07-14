<template>
    <v-container fluid>
        <v-stepper v-model="step">
            <v-stepper-header>
                <v-stepper-step
                    editable
                    step="1">
                    Select a Pokemon!
                </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <pokemon-selector />
                </v-stepper-content>       
            </v-stepper-items>                     
        </v-stepper>
    </v-container>
</template>

<script>
    import Vue from 'vue'
    import store from '@/store'
    import PokemonSelector from './PokemonSelector'

    export default Vue.extend({
        name: 'pokemon-creator',
        components:{
            PokemonSelector
        },
        data: () => ({
            step: 1
        }),
    })

    
</script>