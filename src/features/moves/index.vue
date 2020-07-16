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
    <show-cards :names="movelist" job="Move" :showA="true" />
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import allMoves from '@/assets/database/moves.json';

export default Vue.extend({
  name: 'moves',
  components: {
    ShowCards,
  },
  data() {
    return {
      allMoves,
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
  computed: {
    movelist: function () {
      var mvlist = [];
      for (const mv of this.allMoves) {
        if (
          (this.moveType == mv.type || this.moveType == 'All') &&
          (this.moveCategory == mv.category || this.moveCategory == 'All') &&
          (this.moveAP == mv.action || this.moveAP == 'All') &&
          (this.moveDefense == 'All' ||
            (this.moveCategory != 'Manuever' && this.moveDefense == mv.defense))
        ) {
          mvlist.push(mv.name);
        }
      }
      return mvlist;
    },
  },
});
</script>
