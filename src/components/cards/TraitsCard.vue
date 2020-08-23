<template>
  <div class="trait--wrapper" inline>
    <div class="trait--header">
      <h3 style="display: inline;">{{ trait.Name }}</h3>
    </div>
    <div class="trait--content"><b>Effect: </b> {{ trait.Effect }}</div>
    <div v-if="showA == true">
      <available :name="trait.Name" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Available from './Available';
import { Trait } from '@/class';

export default Vue.extend({
  name: 'trait-card',
  props: {
    trait: {
      type: Trait,
      required: true,
    },
    showA: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Available,
  },
});
</script>

<style scoped lang="scss">
.trait--wrapper {
  font-family: $font--standard;
}
.trait--header {
  background-color: $color--dex;
  border: $border--black-standard;
  font-size: $font-size--l;
  padding: $space--xs;
}
.trait--content {
  background-color: $color--off-white;
  border: $border--black-standard;
  border-top: 0px solid black;
  padding: $space--xs;
}
.trait--format {
  white-space: normal;
  font-family: $font--standard;
  text-align: left;
}
</style>
