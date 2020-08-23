<template>
  <span>
    <v-btn
      color="success"
      large
      tile
      @click="$emit('chose-role')"
      :disabled="!pokemon.HasRole"
    >
      <span v-if="!pokemon.HasRole">CHOOSE A ROLE</span>
      <span v-else>CHOOSE {{ pokemon.Role.Name }}</span>
    </v-btn>
    <show-cards
      :inputs="pokemon.Roles"
      job="Role"
      :selectButton="true"
      @chose="updateRole"
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
    updateRole(variable) {
      this.pokemon.Role = variable;
    },
  },
};
</script>
