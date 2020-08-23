<template>
  <div>
    <br />
    <div class="page--title">ROLEDEX</div>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12">
          <v-select
            label="Role Type"
            :items="roleTypes"
            hide-details
            v-model="roleRole"
            class="dropdown--light"
            outlined
          >
          </v-select>
        </v-col>
      </v-row>
    </v-container>
    <show-cards
      :inputs="this.$store.getters.filteredRole(roleRole)"
      job="Role"
      :showA="true"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import { store } from '@/store';

export default Vue.extend({
  name: 'roles',
  components: {
    ShowCards,
  },
  data() {
    return {
      roleRole: 'All',
      roleTypes: ['All', 'DPS', 'Tank', 'Support'],
    };
  },
});
</script>
