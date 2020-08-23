<template>
  <v-container fluid>
    <v-stepper v-model="step">
      <v-stepper-header class="builder--header">
        <v-stepper-step editable step="1">
          Select a Pokemon!
        </v-stepper-step>
        <v-stepper-step editable step="2">
          Select a Role!
        </v-stepper-step>
        <v-stepper-step editable step="3">
          Select an Ability!
        </v-stepper-step>
        <v-stepper-step editable step="4">
          Select a Starting Move!
        </v-stepper-step>
        <v-stepper-step editable step="5">
          Distribute Skills!
        </v-stepper-step>
        <v-stepper-step editable step="6">
          Choose a Nickname!
        </v-stepper-step>
        <v-stepper-step editable step="7">
          Preview!
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items class="builder--body">
        <v-stepper-content step="1">
          <v-btn
            color="success"
            large
            tile
            @click="step++"
            :disabled="!pokemon.HasSpecies"
          >
            <span v-if="!pokemon.HasSpecies">CHOOSE A POKEMON</span>
            <span v-else>CHOOSE {{ pokemon.Name }}</span>
          </v-btn>
          <pokedex-browser @chose="updatePokemon" />
        </v-stepper-content>
        <v-stepper-content step="2"
          ><role-select :pokemon="pokemon" @chose-role="step++"
        /></v-stepper-content>
        <v-stepper-content step="3">
          <ability-select :pokemon="pokemon" @chose-ability="step++" />
        </v-stepper-content>
        <v-stepper-content step="4"
          ><move-select
            :pokemon="pokemon"
            :creation="true"
            @chose-move="step++"
          />
        </v-stepper-content>
        <v-stepper-content step="5">
          <skill-select :pokemon="pokemon" @chose-skill="step++"
        /></v-stepper-content>
        <v-stepper-content step="6">
          <nickname-select :pokemon="pokemon" @chose-nickname="step++"
        /></v-stepper-content>
        <v-stepper-content step="7">
          <v-btn color="success" large tile @click="savePokemon()"
            >SAVE {{ pokemon.Nickname }}</v-btn
          ><display-pokemon :pokemon="pokemon" :newPokemon="true" />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { getModule } from 'vuex-module-decorators';
import { PokemonManagementStore } from '@/store';
import { Pokemon } from '@/class';
import PokedexBrowser from '@/features/pokedex/PokedexBrowser.vue';
import ShowCards from '@/components/cards/ShowCards.vue';
import DisplayPokemon from '../pokemon-manager/DisplayPokemon.vue';
import RoleSelect from './RoleSelect.vue';
import AbilitySelect from './AbilitySelect.vue';
import SkillSelect from './SkillSelect.vue';
import MoveSelect from './MoveSelect.vue';
import NicknameSelect from './NicknameSelect.vue';

export default Vue.extend({
  name: 'pokemon-builder',
  components: {
    PokedexBrowser,
    ShowCards,
    DisplayPokemon,
    RoleSelect,
    AbilitySelect,
    MoveSelect,
    SkillSelect,
    NicknameSelect,
  },
  data: () => ({
    step: 1,
    pokemon: {},
  }),
  created() {
    this.pokemon = new Pokemon();
  },
  methods: {
    updatePokemon(variable) {
      this.pokemon = variable;
    },
    savePokemon() {
      const store = getModule(PokemonManagementStore, this.$store);
      store.AddPokemon(this.pokemon);
      this.$router.push('pokemon-manager');
    },
  },
});
</script>

<style scoped lang="scss">
.builder--header {
  background: $color--pokedex-light;
}
.builder--body {
  background: $color--off-white;
}
.skill--good {
  color: darkgreen;
}
.skill--bad {
  color: darkred;
}
.skill--good-btn {
  background-color: darkgreen;
}
.skill--bad-btn {
  background-color: darkred;
}
</style>
