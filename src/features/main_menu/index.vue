<template>
  <div style="text-align: center;">
    <trainer-button to="/pokedex">Pokedex</trainer-button> <br />
    <trainer-button to="/abilities">Abilities</trainer-button> <br />
    <trainer-button to="/moves">Moves</trainer-button> <br />
    <trainer-button to="/roles">Roles</trainer-button> <br />
    <trainer-button to="/traits">Traits</trainer-button> <br />
    <trainer-button to="/pokemon">Pokemon Builder (WIP)</trainer-button> <br />
  </div>
</template>

<script>
import Vue from 'vue';
import TrainerButton from '@/components/TrainerButton.vue';

export default Vue.extend({
  name: 'main-menu',
  components: {
    TrainerButton,
  },
});
</script>
