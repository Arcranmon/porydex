<template>
  <pokemon-box />
</template>

<script>
import Vue from 'vue';
import PokemonBox from './PokemonBox';

export default Vue.extend({
  components: {
    PokemonBox,
  },
});
</script>
