<template>
  <div>
    <br />
    <div class="page--title">ABILITYDEX</div>
    <show-cards
      :inputs="this.$store.getters.allAbilities"
      job="Ability"
      :showA="true"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import { store } from '@/store';

export default Vue.extend({
  name: 'abilities',
  components: {
    ShowCards,
  },
});
</script>
