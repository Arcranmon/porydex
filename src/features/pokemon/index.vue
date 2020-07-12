<template>
  <div id="app">
    <div style="text-align:center;margin:auto; width:80%; padding: 20px"><file-reader @load="ptext = $event"></file-reader></div>
    <display-pokemon :stats='pjson'></display-pokemon>
  </div>
</template>

<script>
    import Vue from 'vue'
    import FileReader from '@/components/FileReader'
    import DisplayPokemon from './DisplayPokemonFromJson'

    export default Vue.extend({
    name: 'pokemon-display',
    components: {
        FileReader,
        DisplayPokemon
    },
    data: () => ({ ptext: '[]' }),
    computed: {
      pjson: function(){
        return JSON.parse(this.ptext);
      }
    }
    })

    
</script>