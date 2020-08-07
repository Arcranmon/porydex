<template>
  <span class="skills--wrapper">
    <v-btn
      color="success"
      large
      tile
      @click="$emit('chose-skill')"
      :disabled="!(pokemon.HasNoSkillPoints && pokemon.FavoredSkillPoints >= 2)"
    >
      CONTINUE
    </v-btn>
    <div>
      <b>{{ pokemon.SkillPoints }} Remaining Skill Points</b><br />
      <span v-if="(pokemon.FavoredSkillPoints < 2)"
        ><i
          >Must add {{ 2 - pokemon.FavoredSkillPoints }} more points to Favored
          Skills.</i
        ></span
      >
      <span v-else><br /></span>
    </div>
    <div v-for="skill in pokemon.Skills.names" :key="skill">
      <v-row no-gutters="">
        <v-col cols="1">
          <b
            v-bind:class="{
              'skill--good': pokemon.IsFavored(skill),
              'skill--bad': pokemon.IsDeficient(skill),
            }"
            >{{ skill }}:
          </b></v-col
        >
        <v-col cols="1">{{ pokemon[skill] }}</v-col>
        <v-col cols="2">
          <v-btn
            inline
            x-small
            @click="pokemon.Skills.Increment(skill)"
            color="green"
            >+</v-btn
          >
          <v-btn
            inline
            x-small
            @click="pokemon.Skills.Decrement(skill)"
            color="red"
            >-</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </span>
</template>

<script>
import Vue from 'vue';
import { Pokemon } from '@/class';
export default {
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
  },
  data: () => ({}),
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.skill--good {
  color: darkgreen;
}
.skill--bad {
  color: darkred;
}
.skill--good-btn {
  background-color: darkgreen;
}
.skill--bad-btn {
  background-color: darkred;
}
.skills--wrapper {
  color: black;
}
</style>
