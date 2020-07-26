<template>
  <v-expansion-panels flat accordion class="available--wrapper">
    <v-expansion-panel>
      <v-expansion-panel-header
        expand-icon="mdi-chevron-down"
        class="available--top"
        ><b>Available To:</b></v-expansion-panel-header
      >
      <v-expansion-panel-content class="available--bottom"
        ><span v-for="n in namelist" :key="n"
          >{{ n
          }}<span v-if="n != namelist[namelist.length - 1]">, </span></span
        >
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import Vue from 'vue';
import allPokemon from '@/assets/database/pokemon.json';

export default Vue.extend({
  name: 'available',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      allPokemon,
    };
  },
  computed: {
    namelist: function () {
      var pklist = [];
      for (const pkm of this.allPokemon) {
        if (Object.values(pkm).includes(this.name)) {
          pklist.push(pkm.name);
        }
      }
      if (pklist.length == 0) {
        pklist.push('None');
      }
      return pklist;
    },
  },
});
</script>

<style scoped lang="scss">
.available--wrapper {
  font-family: $font--standard;
  border-radius: 0px;
}
.available--top {
  background-color: lightgrey;
  white-space: normal !important;
  border: $border--black-standard;
  border-top: 0px solid black;
  padding: $space--xs;
}
.available--bottom {
  background-color: $color--off-white;
  border: $border--black-standard;
  border-top: 0px solid black;
  padding: $space--xs;
}
</style>
