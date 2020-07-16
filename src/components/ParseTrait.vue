<template>
  <div>
    <b>{{ traitName }}:</b> {{ trait.effect }}
  </div>
</template>

<script>
import Vue from 'vue';
import allTraits from '@/assets/database/traits.json';

export default Vue.extend({
  name: 'trait-text',
  props: {
    traitName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      allTraits,
      errtrt: {
        effect: 'This trait was not found.',
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
      return this.errtrt;
    },
  },
});
</script>
