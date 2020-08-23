<template>
  <div>
    <br />
    <div class="page--title">MOVEDEX</div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="3">
          <v-select
            label="Move Type"
            :items="allTypes"
            hide-details
            v-model="moveType"
            class="dropdown--light"
            outlined
          >
          </v-select>
        </v-col>
        <v-col cols="12" lg="3">
          <v-select
            label="Move Category"
            :items="allCategories"
            hide-details
            v-model="moveCategory"
            outlined
            class="dropdown--light"
          >
          </v-select>
        </v-col>
        <v-col cols="12" lg="3">
          <v-select
            label="Move AP Cost"
            :items="allAP"
            hide-details
            v-model="moveAP"
            outlined
            class="dropdown--light"
          >
          </v-select>
        </v-col>
        <v-col cols="12" lg="3">
          <v-select
            label="Defense"
            :items="allDefense"
            hide-details
            v-model="moveDefense"
            outlined
            class="dropdown--light"
          >
          </v-select>
        </v-col>
      </v-row>
    </v-container>
    <show-cards
      :inputs="
        this.$store.getters.allMoves(
          moveType,
          moveCategory,
          moveAP,
          moveDefense
        )
      "
      job="Move"
      :showA="true"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import { store } from '@/store';

export default Vue.extend({
  name: 'moves',
  components: {
    ShowCards,
  },
  data() {
    return {
      moveType: 'All',
      allTypes: [
        'All',
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
      moveCategory: 'All',
      allCategories: ['All', 'Maneuver', 'Strike', 'Trick'],
      moveAP: 'All',
      allAP: ['All', '1 AP', '2 AP'],
      moveDefense: 'All',
      allDefense: ['All', 'Evasion', 'Resolve', 'Vigor'],
    };
  },
});
</script>
