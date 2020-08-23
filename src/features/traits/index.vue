<template>
  <div>
    <br />
    <div class="page--title">TRAITDEX</div>
    <show-cards
      :inputs="this.$store.getters.allTraits"
      job="Traits"
      :showA="true"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import { store } from '@/store';

export default Vue.extend({
  name: 'traits',
  components: {
    ShowCards,
  },
});
</script>
