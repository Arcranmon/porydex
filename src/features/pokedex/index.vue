<template>
    <div >
        <div style="text-align:center;font-size:80px;font-family:typeface-press-start-2p">POKEDEX</div>
        <pokedex-brower></pokedex-brower>
    </div>
</template>

<script>
    import Vue from 'vue'
    import PokedexBrower from './PokedexBrowser.vue'

    export default Vue.extend({
    name: 'pokedex',
    components: {
        PokedexBrower
    },
    })
</script>