<template>
  <div id="app"></div>
</template>

<script>
import Vue from 'vue';
import FileReader from '@/components/FileReader';
import DisplayPokemon from './DisplayPokemonFromJson';

export default Vue.extend({
  name: 'pokemon-display',
  components: {
    FileReader,
    DisplayPokemon,
  },
  data: () => ({ ptext: '[]' }),
  computed: {
    pjson: function () {
      return JSON.parse(this.ptext);
    },
  },
});
</script>
