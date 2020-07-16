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
    <show-cards :names="rolelist" job="Role" :showA="true" />
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import allRoles from '@/assets/database/roles.json';

export default Vue.extend({
  name: 'roles',
  components: {
    ShowCards,
  },
  data() {
    return {
      allRoles,
      roleRole: 'All',
      roleTypes: ['All', 'DPS', 'Tank', 'Support'],
    };
  },
  computed: {
    rolelist: function () {
      var rlist = [];
      for (const rl of this.allRoles) {
        if (this.roleRole == rl.role || this.roleRole == 'All') {
          rlist.push(rl.name);
        }
      }
      return rlist;
    },
  },
});
</script>
