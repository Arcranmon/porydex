<template>
  <div>
    <br />
    <div class="page--title">TRAITDEX</div>
    <show-cards :names="traitList" job="Traits" :showA="true" />
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import allTraits from '@/assets/database/traits.json';

export default Vue.extend({
  name: 'traits',
  components: {
    ShowCards,
  },
  data() {
    return {
      allTraits,
    };
  },
  computed: {
    traitList: function () {
      var trtlst = [];
      for (const trt of this.allTraits) {
        trtlst.push(trt.name);
      }
      return trtlst;
    },
  },
});
</script>
