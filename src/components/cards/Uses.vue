<template>
  <div class="uses--wrapper">
    <b>Remaining Uses:</b>
    <span class="uses--right"
      >{{ input.Uses }}/{{ input.MaxUses }}
      <v-btn inline x-small @click="input.DecrementUses()" color="red">-</v-btn>
      <v-btn inline x-small @click="input.IncrementUses()" color="green"
        >+</v-btn
      >
    </span>
  </div>
</template>

<script>
import Vue from 'vue';
import { Move, Ability } from '@/class';

export default Vue.extend({
  name: 'uses',
  props: {
    input: {
      type: [Move, Ability],
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.uses--wrapper {
  font-family: $font--standard;
  border-radius: 0px;
  background-color: lightgrey;
  border: $border--black-standard;
  border-top: 0px solid black;
  padding: $space--xs;
  width: 100%;
}
.uses--right {
  float: right;
}
</style>
