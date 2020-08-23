<template>
  <span
    ><span v-if="creation"
      ><v-btn
        color="success"
        large
        tile
        @click="$emit('chose-move')"
        :disabled="(!pokemon.HasStartingMove)"
      >
        <span v-if="(!pokemon.HasStartingMove)">CHOOSE A STARTING MOVE</span>
        <span v-else>CHOOSE {{ pokemon.Moves[3].Name }}</span>
      </v-btn>
      <show-cards
        :inputs="pokemon.Tier1NaturalMoves"
        job="Move"
        :selectButton="true"
        @chose="addStartingMove"
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
        :inputs="pokemon.Moves"
        job="Move"
        :selectButton="true"
        @chose="removeMove"
      />
      <h2>Natural Moves</h2>
      <show-cards
        :inputs="pokemon.UnknownNaturalMoves"
        job="Move"
        :selectButton="true"
        @chose="addMove"
      />
      <h2>Tutor Moves</h2>
      <show-cards
        :inputs="pokemon.UnknownTutorMoves"
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
  components: {
    ShowCards,
  },
  methods: {
    addStartingMove(variable) {
      this.pokemon.AddStartingMove(variable);
    },
    addMove(variable) {
      this.pokemon.AddMove(variable);
    },
    removeMove(variable) {
      this.pokemon.RemoveMove(variable);
    },
  },
};
</script>
