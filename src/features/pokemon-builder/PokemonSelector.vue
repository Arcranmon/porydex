<template>
    <pokedex-browser />
</template>

<script>
    import Vue from 'vue'
    import store from '@/store'
    import PokedexBrowser from '../pokedex/PokedexBrowser'

    export default Vue.extend({
        components:{
            PokedexBrowser
        }
    })

    
</script>