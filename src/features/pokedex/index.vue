<template>
  <div>
    <pokedex-brower></pokedex-brower>
  </div>
</template>

<script>
import Vue from 'vue';
import PokedexBrower from './PokedexBrowser.vue';

export default Vue.extend({
  name: 'pokedex',
  components: {
    PokedexBrower,
  },
});
</script>
