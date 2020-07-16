<template>
  <div>
    <div class="page--title">
      POKEDEX
    </div>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12" lg="4">
          <v-select
            label="Filter By Type"
            :items="allTypes"
            hide-details
            v-model="type"
            class="dropdown--light"
            outlined
            clearable
          >
          </v-select>
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Filter By Role"
            :items="allRoles"
            item-text="name"
            item-value="name"
            hide-details
            v-model="role"
            class="dropdown--light"
            outlined
            clearable
          >
          </v-select>
        </v-col>
        <v-col cols="12" lg="4">
          <v-select
            label="Filter By Home Turf"
            :items="allTurf"
            hide-details
            v-model="turf"
            class="dropdown--light"
            outlined
            clearable
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12">
          <v-select
            label="Choose a Pokemon (Or Type Their Name)!"
            :items="filtermon"
            hide-details
            v-model="selectedPokemon"
            outlined
            return-object
            class="dropdown--light"
          >
            <template slot="item" slot-scope="{ item }">
              #{{ item.dexnumber }} - {{ item.name }}
            </template>
            <template slot="selection" slot-scope="{ item }">
              #{{ item.dexnumber }} - {{ item.name }}
            </template>
          </v-select>
        </v-col>
      </v-row>
    </v-container>
    <pokedex-stat-display :pokemon="selectedPokemon" />
  </div>
</template>

<script>
import Vue from 'vue';
import allPokemon from '@/assets/database/pokemon.json';
import allRoles from '@/assets/database/roles.json';
import PokedexStatDisplay from './PokedexStatDisplay';

export default Vue.extend({
  components: {
    PokedexStatDisplay,
  },
  data() {
    return {
      allPokemon,
      selectedPokemon: '',
      type: undefined,
      allTypes: [
        'Bug',
        'Dark',
        'Dragon',
        'Electric',
        'Fairy',
        'Fighting',
        'Fire',
        'Flying',
        'Ghost',
        'Grass',
        'Ground',
        'Ice',
        'Normal',
        'Poison',
        'Psychic',
        'Rock',
        'Steel',
        'Water',
      ],
      role: undefined,
      allRoles,
      turf: undefined,
      allTurf: [
        'Caves',
        'Desert',
        'Forest',
        'Grassland',
        'Mountain',
        'Open Water',
        'Tundra',
        'Urban',
        'Wetlands',
      ],
    };
  },
  computed: {
    filtermon: function () {
      var pklist = [];
      for (const pk of this.allPokemon) {
        if (
          (this.type == undefined ||
            this.type == pk.type1 ||
            ('type2' in pk && this.type == pk.type2)) &&
          (this.role == undefined ||
            this.role == pk.role1 ||
            this.role == pk.role2 ||
            this.role == pk.role3) &&
          (this.turf == undefined ||
            ('turf1' in pk && this.turf == pk.turf1) ||
            ('turf2' in pk && this.turf == pk.turf2))
        ) {
          pklist.push(pk);
        }
      }
      return pklist;
    },
  },
});
</script>
