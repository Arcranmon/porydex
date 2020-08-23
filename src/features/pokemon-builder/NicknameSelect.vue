<template>
  <span class="nickname--wrapper">
    <v-btn
      color="success"
      large
      tile
      @click="$emit('chose-nickname')"
      :disabled="(pokemon.Nickname == '')"
      ><span v-if="(pokemon.Nickname == '')">CHOOSE A NICKNAME</span>
      <span v-else>CHOOSE {{ pokemon.Nickname }}</span></v-btn
    >
    <br />
    <br /><b>Nickname: </b
    ><input v-model="pokemon.Nickname" placeholder="Input Nickname" />
  </span>
</template>

<script>
import Vue from 'vue';
import { Pokemon } from '@/class';
export default {
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.nickname--wrapper {
  color: black;
}
</style>
