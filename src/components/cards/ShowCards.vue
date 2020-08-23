<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center"
        v-for="n in inputs"
        :lg="colWidth"
        v-on:click="clickMethod(n)"
        v-bind:class="{ 'card--button': selectButton }"
      >
        <div class="card--box" v-if="job == 'Move'">
          <move-card
            :move="n"
            :showA="showA"
            :showUses="showUses"
            :melee="melee"
            :range="range"
          />
        </div>
        <div class="card--box" v-if="job == 'Ability'">
          <ability-card :ability="n" :showA="showA" :showUses="showUses" />
        </div>
        <div class="card--box" v-if="job == 'Role'">
          <role-card :role="n" :showA="showA" />
        </div>
        <div class="card--box" v-if="job == 'Traits'">
          <traits-card :trait="n" :showA="showA" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import MoveCard from './MoveCard';
import AbilityCard from './AbilityCard';
import RoleCard from './RoleCard';
import TraitsCard from './TraitsCard';
import Available from './Available.vue';

export default Vue.extend({
  name: 'show-cards',
  props: {
    inputs: {
      type: Array,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    showA: {
      type: Boolean,
      required: false,
    },
    showUses: {
      type: Boolean,
      required: false,
    },
    selectButton: {
      type: Boolean,
      required: false,
    },
    melee: {
      type: Number,
      required: false,
      default: 6,
    },
    range: {
      type: Number,
      required: false,
      default: 6,
    },
  },
  components: {
    MoveCard,
    AbilityCard,
    RoleCard,
    TraitsCard,
    Available,
  },
  methods: {
    clickMethod(variable) {
      this.$emit('chose', variable);
    },
  },
  computed: {
    colWidth: function () {
      return Math.max(12 / this.inputs.length, 4);
    },
  },
});
</script>

<style scoped lang="scss">
.card--box {
  width: 100%;
}

.card--button:hover {
  transform: scale(1.01);
  cursor: pointer;
}
</style>
