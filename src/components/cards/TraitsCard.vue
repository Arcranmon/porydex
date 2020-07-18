<template>
  <div class="trait--wrapper" inline>
    <div class="trait--header">
      <h3 style="display: inline;">{{ trait.name }}</h3>
    </div>
    <div class="trait--content"><b>Effect: </b> {{ trait.effect }}</div>
    <div v-if="showA == true">
      <available :name="traitName" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import allTraits from '@/assets/database/traits.json';
import Available from './Available';

export default Vue.extend({
  name: 'trait-card',
  props: {
    traitName: {
      type: String,
      required: true,
    },
    showA: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      allTraits,
      errTrait: {
        name: this.traitName,
        effect: 'Trait was not found',
      },
    };
  },
  computed: {
    trait: function () {
      for (const trt of this.allTraits) {
        if (this.traitName == trt.name) {
          return trt;
        }
      }
      return this.errTrait;
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
