<template>
  <span>
    <v-btn
      color="success"
      large
      tile
      @click="$emit('chose-ability')"
      :disabled="!pokemon.HasAbility"
    >
      <span v-if="!pokemon.HasAbility">CHOOSE AN ABILITY</span>
      <span v-else>CHOOSE {{ pokemon.Ability }}</span>
    </v-btn>
    <show-cards
      :names="pokemon.AbilityList"
      job="Ability"
      :selectButton="true"
      @chose="updateAbility"
    />
  </span>
</template>

<script>
import Vue from 'vue';
import { Pokemon } from '@/class';
import ShowCards from '@/components/cards/ShowCards.vue';
import allAbilities from '@/assets/database/abilities.json';
export default {
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
  },
  data: () => ({
    allAbilities,
  }),
  components: {
    ShowCards,
  },
  methods: {
    updateAbility(variable) {
      this.pokemon.Ability = variable;
    },
  },
};
</script>
