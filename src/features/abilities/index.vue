<template>
  <div>
    <br />
    <div class="page--title">ABILITYDEX</div>
    <show-cards :names="abilitylist" job="Ability" :showA="true" />
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import allAbilities from '@/assets/database/abilities.json';

export default Vue.extend({
  name: 'moves',
  components: {
    ShowCards,
  },
  data() {
    return {
      allAbilities,
    };
  },
  computed: {
    abilitylist: function () {
      var alist = [];
      for (const abl of this.allAbilities) {
        alist.push(abl.name);
      }
      return alist;
    },
  },
});
</script>
