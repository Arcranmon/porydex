<template>
  <div>
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
            :items="[]"
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
            :items="this.$store.getters.filteredPokemon(type, role, turf)"
            hide-details
            v-model="pokemon"
            outlined
            return-object
            class="dropdown--light"
            @change="$emit('chose', pokemon)"
          >
            <template slot="item" slot-scope="{ item }">
              #{{ item.DexNumber }} - {{ item.Name }}
            </template>
            <template slot="selection" slot-scope="{ item }">
              #{{ item.DexNumber }} - {{ item.Name }}
            </template>
          </v-select>
        </v-col>
      </v-row>
    </v-container>
    <pokedex-stat-display :pokemon="pokemon" />
  </div>
</template>

<script>
import Vue from 'vue';
import PokedexStatDisplay from './PokedexStatDisplay';
import { Pokemon } from '@/class';
import { store } from '@/store';

export default Vue.extend({
  components: {
    PokedexStatDisplay,
  },
  data() {
    return {
      pokemon: new Pokemon(),
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
});
</script>
