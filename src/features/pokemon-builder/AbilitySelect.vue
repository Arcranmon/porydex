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
      <span v-else>CHOOSE {{ pokemon.Ability.Name }}</span>
    </v-btn>
    <show-cards
      :inputs="pokemon.Abilities"
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
export default {
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
  },
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
