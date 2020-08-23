<template>
  <div>
    <b>{{ trait.Name }}:</b> {{ trait.Effect }}
  </div>
</template>

<script>
import Vue from 'vue';
import { Trait } from '@/class';

export default Vue.extend({
  name: 'trait-text',
  props: {
    trait: {
      type: Trait,
      required: true,
    },
  },
});
</script>
