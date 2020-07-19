<template>
  <div style="padding: 15px;">
    <v-row flex fluid fill-height no-gutters>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column; outline: 2px solid darkslategrey;"
        lg="3"
      >
        <div style="text-align: center;">
          <div class="pokemon-cell">
            <h2 style="display: inline;">
              {{ pokemon.nickname }}, Level {{ pokemon.level }}
              {{ pokemon.species }}
            </h2>
          </div>
          <img
            :src="require('../../assets/pokemon/' + pokemon.DexNumber + '.png')"
            style="max-width: 60%; width: auto; height: auto;"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="2"
      >
        <div class="pokemon-cell">
          <h2 style="text-align: center;">Basic Statistics</h2>
        </div>
        <v-row no-gutters style="padding: 10px;">
          <v-col cols="6">
            <b>Type:</b> <br />
            <b>Size:</b> <br />
            <b>Home Turf:</b> <br />
            <b>Gifts:</b> <br />
          </v-col>
          <v-col cols="6" style="text-align: center;">
            <span class="Type" :class="pokemon.Type1">{{ pokemon.Type1 }}</span>
            <span
              v-if="(pokemon.NumTypes == 2)"
              class="Type"
              :class="pokemon.Type2"
              >{{ pokemon.Type2 }}</span
            >
            {{ pokemon.Size }} <br />
            <div v-for="i in pokemon.TurfList" :key="i">
              {{ i
              }}<span v-if="i != pokemon.TurfList[pokemon.TurfList.length - 1]"
                >,
              </span>
            </div>
            <div v-for="i in pokemon.GiftList" :key="i">
              {{ i
              }}<span v-if="i != pokemon.GiftList[pokemon.GiftList.length - 1]"
                >,
              </span>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="2"
      >
        <div class="pokemon-cell">
          <h2 style="text-align: center;">Combat Statistics</h2>
        </div>
        <v-row no-gutters style="padding: 10px;">
          <v-col cols="6">
            <b>HP:</b> <br />
            <b>Initiative:</b> <br />
            <b>Movement:</b> <br />
            <b>Evasion:</b> <br />
            <b>Resolve:</b> <br />
            <b>Vigor:</b> <br />
            <b>Melee Damage:</b> <br />
            <b>Ranged Damage:</b> <br />
            <b>Physical Armor:</b> <br />
            <b>Special Armor:</b> <br />
          </v-col>
          <v-col cols="6" style="text-align: center;">
            {{ pokemon.MaxHP }} <br />
            {{ pokemon.Init }} <br />
            {{ pokemon.Movement }}
            <br />
            {{ pokemon.DefenseStat('Evasion') }} <br />
            {{ pokemon.DefenseStat('Resolve') }}<br />
            {{ pokemon.DefenseStat('Vigor') }}<br />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="2"
      >
        <div class="pokemon-cell">
          <h2 style="text-align: center;">Skills</h2>
        </div>
        <v-row no-gutters style="padding: 10px;">
          <v-col cols="6">
            <div v-for="(skill, index) in pokemon.Skills.names" :key="skill">
              <span v-if="index == 0"><h3>Action Skills</h3></span>
              <span v-if="index == 3"><h3>Clever Skills</h3></span>
              <span v-if="index == 6"><h3>Social Skills</h3></span>
              <span
                v-bind:class="{
                  goodskill: pokemon.IsFavored(skill),
                  badskill: pokemon.IsDeficient(skill),
                }"
                ><b>{{ skill }}:</b></span
              >
              <br />
            </div>
            <br />
          </v-col>
          <v-col cols="6" style="text-align: center;">
            <div v-for="(skill, index) in pokemon.Skills.names" :key="skill">
              <span v-if="index % 3 == 0"
                ><h3><br /></h3
              ></span>
              <span v-if="Number(pokemon[skill]) >= 0">+</span
              >{{ pokemon[skill] }}
              <br />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="3"
      >
        <div style="text-align: left;height=100%">
          <div class="pokemon-cell">
            <h2 style="text-align: center;">Traits</h2>
          </div>
          <div
            v-for="trait in pokemon.TraitList"
            :key="trait"
            style="padding: 10px;"
          >
            <parse-trait :traitName="trait" />
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row flex fluid fill-height no-gutters>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="6"
      >
        <div class="pokemon-cell">
          <h2 style="text-align: center;">Ability</h2>
        </div>
        <show-cards :names="[pokemon.ability]" job="Ability" />
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="6"
      >
        <div class="pokemon-cell">
          <h2 style="text-align: center;">Role</h2>
        </div>
        <show-cards :names="[pokemon.role]" job="Role" />
      </v-col>
    </v-row>
    <v-row flex fluid fill-height no-gutters>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="12"
      >
        <div class="pokemon-cell">
          <h2 style="text-align: center;">Moves</h2>
        </div>
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="12"
      >
        <show-cards :names="pokemon.moves" job="Move" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue';
import store from '@/store';
import { Pokemon } from '@/class';
import ShowCards from '@/components/cards/ShowCards';
import ParseTrait from '@/components/ParseTrait';

export default Vue.extend({
  name: 'display-pokemon',
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
  },
  methods: {},
  computed: {},
  components: {
    ShowCards,
    ParseTrait,
  },
});
</script>

<style scoped>
.pokemon-cell {
  background-color: darkcyan;
  font-family: 'Courier New';
  border-bottom: 2px solid darkslategrey;
  font-size: 18px;
  padding: 5px;
  box-sizing: border-box;
}
.pokemon-cell-bottom {
  color: black;
  background-color: rgb(136, 212, 212);
  outline: 2px solid darkslategrey;
  font-family: 'Courier New';
  font-size: 14px;
  box-sizing: border-box;
}
.goodskill {
  color: darkgreen;
}
.badskill {
  color: darkred;
}
.wrapper {
  display: flex;
}
</style>
