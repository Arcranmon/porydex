<template>
  <span
    ><span v-if="creation"
      ><v-btn
        color="success"
        large
        tile
        @click="
          updateStartingMove(selectedMove);
          $emit('chose-move');
        "
        :disabled="(selectedMove == '')"
      >
        <span v-if="(selectedMove == '')">CHOOSE A STARTING MOVE</span>
        <span v-else>CHOOSE {{ selectedMove }}</span>
      </v-btn>
      <show-cards
        :names="pokemon.Tier1NaturalMoveList"
        job="Move"
        :selectButton="true"
        @chose="selectMove"
      />
    </span>
    <span v-else>
      <v-btn
        color="success"
        large
        tile
        @click="$emit('chose-move')"
        :disabled="(!pokemon.MovesValid())"
      >
        <span>ACCEPT NEW MOVES</span> </v-btn
      ><br />
      {{ pokemon.MovesErrorMessage() }}<br />
      <h2>Known Moves</h2>
      <show-cards
        :names="pokemon.MoveList"
        job="Move"
        :selectButton="true"
        @chose="removeMove"
      />
      <h2>Unknown Natural Moves</h2>
      <show-cards
        :names="pokemon.UnknownNaturalMoves()"
        job="Move"
        :selectButton="true"
        @chose="addMove"
      />
      <h2>Unknown Tutor Moves</h2>
      <show-cards
        :names="pokemon.UnknownTutorMoves()"
        job="Move"
        :selectButton="true"
        @chose="addMove"
      />
    </span>
  </span>
</template>

<script>
import Vue from 'vue';
import { Pokemon } from '@/class';
import ShowCards from '@/components/cards/ShowCards.vue';
import allMoves from '@/assets/database/moves.json';
export default {
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
    creation: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    allMoves,
    selectedMove: '',
  }),
  components: {
    ShowCards,
  },
  methods: {
    selectMove(variable) {
      this.selectedMove = variable;
    },
    removeMove(variable) {
      this.pokemon.RemoveMove(variable);
    },
    addMove(variable) {
      this.pokemon.AddMove(variable);
    },
    updateStartingMove(variable) {
      if (this.pokemon.HasStartingMove) {
        this.pokemon.PopMove();
      }
      this.pokemon.AddMove(variable);
    },
  },
};
</script>
