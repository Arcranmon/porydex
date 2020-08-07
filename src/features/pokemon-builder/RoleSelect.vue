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
      <span v-else>CHOOSE {{ pokemon.RoleName }}</span>
    </v-btn>
    <show-cards
      :names="pokemon.RoleList"
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
import allRoles from '@/assets/database/roles.json';
export default {
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
  },
  data: () => ({
    allRoles,
  }),
  components: {
    ShowCards,
  },
  methods: {
    updateRole(variable) {
      for (const rl of this.allRoles) {
        if (variable == rl.name) {
          this.pokemon.Role = rl;
        }
      }
    },
  },
};
</script>
