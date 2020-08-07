<template>
  <span class="nickname--wrapper">
    <v-btn
      color="success"
      large
      tile
      @click="(pokemon.Nickname = nickname), $emit('chose-nickname')"
      :disabled="(nickname == '')"
      ><span v-if="(nickname == '')">CHOOSE A NICKNAME</span>
      <span v-else>CHOOSE {{ nickname }}</span></v-btn
    >
    <br />
    <br /><b>Nickname: </b
    ><input v-model="nickname" placeholder="Input Nickname" />
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
  components: {},
  data: function () {
    return {
      nickname: this.pokemon.Nickname,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.nickname--wrapper {
  color: black;
}
</style>
