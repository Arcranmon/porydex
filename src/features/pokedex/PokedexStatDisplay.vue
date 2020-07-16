<template>
  <!-- 70% width to work with -->
  <div class="pokedex--wrapper">
    <v-row flex fluid fill-height no-gutters class="pokedex--header">
      <v-col cols="12" class="flex flex-column" lg="4">
        <div class="pokedex--header-content-left">
          <h1>{{ pokemon.name }}</h1>
          <span>
            <span class="Type" :class="pokemon.type1">{{ pokemon.type1 }}</span>
            <span v-if="pokemon.type2" class="Type" :class="pokemon.type2">{{
              pokemon.type2
            }}</span></span
          ><br />
          <img
            :src="require('../../assets/pokemon/' + pokemon.dexnumber + '.png')"
            style="max-width: 60%;"
          />
        </div>
      </v-col>
      <v-col cols="6" class="pokedex--header-content-right" lg="4">
        <div class="pokedex--name-header">
          <h3 class="text-center">Basic Stastics</h3>
          <b>Favored Skills:</b> {{ pokemon.skill1 }}, {{ pokemon.skill2 }}
          <br />
          <b>Deficient Skill:</b> {{ pokemon.badskill }} <br />
          <b>Home Turf:</b>
          <span v-for="i in turflist" :key="i"
            >{{ i
            }}<span v-if="i != turflist[turflist.length - 1]">, </span></span
          ><br />
          <b>Gifts:</b>
          <span v-for="i in giftlist" :key="i"
            >{{ i
            }}<span v-if="i != giftlist[giftlist.length - 1]">, </span></span
          ><br />
          <b>Initiative:</b> {{ pokemon.initiative }} <br />
          <b>Movement:</b> {{ pokemon.movement }}
          <span v-if="(pokemon.movementtype1)">{{
            pokemon.movementtype1
          }}</span>
          <br />
          <b>Size:</b> {{ pokemon.size }} <br />
          <br />
          <b>Defense Priority:</b> {{ pokemon.def1 }} > {{ pokemon.def2 }} >
          {{ pokemon.def3 }} <br />
          <b>Basic Attack: </b>
          <span v-for="i in attacklist" :key="i"
            >{{ i
            }}<span v-if="i != attacklist[attacklist.length - 1]"
              >,
            </span></span
          ><br />
        </div>
      </v-col>
      <v-col cols="6" class="pokedex--header-content-right" lg="4">
        <h3 class="text-center">Traits</h3>
        <parse-trait :traitName="pokemon.trait1" /> <br />
        <span v-if="(pokemon.trait2)"
          ><parse-trait :traitName="pokemon.trait2"
        /></span>
        <br />
      </v-col>
    </v-row>
    <div class="pokedex--cell-header">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokedex--cell-dropdown-header"
            ><h1>Roles</h1></v-expansion-panel-header
          >
          <v-expansion-panel-content class="pokedex--cell-dropdown-content">
            <show-cards :names="parseRoles(pokemon)" job="Role" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="pokedex--cell-header">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokedex--cell-dropdown-header"
            ><h1>Abilities</h1></v-expansion-panel-header
          >
          <v-expansion-panel-content class="pokedex--cell-dropdown-content">
            <show-cards :names="parseAbilities(pokemon)" job="Ability" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="pokedex--cell-header">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokedex--cell-dropdown-header"
            ><h1>Starting Moves</h1></v-expansion-panel-header
          >
          <v-expansion-panel-content class="pokedex--cell-dropdown-content">
            <show-cards :names="parseMoves(pokemon, 0, false)" job="Move" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="pokedex--cell-header">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokedex--cell-dropdown-header"
            ><h1>Natural Moves</h1></v-expansion-panel-header
          >
          <v-expansion-panel-content class="pokedex--cell-dropdown-content">
            <show-cards :names="parseMoves(pokemon, 1, false)" job="Move" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div class="pokedex--cell-header">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokedex--cell-dropdown-header"
            ><h1>Tutor Moves</h1></v-expansion-panel-header
          >
          <v-expansion-panel-content class="pokedex--cell-dropdown-content">
            <show-cards :names="parseMoves(pokemon, 1, true)" job="Move" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ShowCards from '@/components/cards/ShowCards';
import ParseTrait from '@/components/ParseTrait';
import '@/styles/types.scss';

export default Vue.extend({
  name: 'pokemon-stat-display',
  components: {
    ShowCards,
    ParseTrait,
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    parseAbilities: function (pokemon) {
      if (!pokemon.ability2) {
        return [pokemon.ability1];
      } else {
        return [pokemon.ability1, pokemon.ability2];
      }
    },
    parseMoves: function (pokemon, tier, tutor) {
      if (tier == 0) {
        return [pokemon.smove1, pokemon.smove2, pokemon.smove3];
      }
      if (tier == 1 && tutor == 0) {
        return [pokemon.t1natmove1, pokemon.t1natmove2, pokemon.t1natmove3];
      }
      if (tier == 1 && tutor == 1) {
        return [pokemon.t1tutmove1, pokemon.t1tutmove2];
      }
    },
    parseRoles: function (pokemon) {
      return [pokemon.role1, pokemon.role2, pokemon.role3];
    },
  },
  computed: {
    turflist: function () {
      if ('turf2' in this.pokemon) {
        return [this.pokemon.turf1, this.pokemon.turf2];
      } else {
        return [this.pokemon.turf1];
      }
    },
    giftlist: function () {
      if ('gift2' in this.pokemon) {
        return [this.pokemon.gift1, this.pokemon.gift2];
      } else {
        return [this.pokemon.gift1];
      }
    },
    attacklist: function () {
      if ('basicattack2' in this.pokemon) {
        return [this.pokemon.basicattack1, this.pokemon.basicattack2];
      } else {
        return [this.pokemon.basicattack1];
      }
    },
  },
});
</script>

<style scoped lang="scss">
.pokedex--wrapper {
  font-family: $font--standard;
  margin: $space--s;
}
.pokedex--header {
  margin: auto;
  text-align: center;
  white-space: normal;
  border-top-left-radius: 3em;
  border-top-right-radius: 3em;
  background-color: $color--pokedex-light;
  border: $space--xs solid darkcyan;
}
.pokedex--header-content-left {
  text-align: center;
}
.pokedex--header-content-right {
  text-align: left;
}
.pokedex--cell-header {
  background-color: darkcyan;
  padding: $space--xs;
}
.pokedex--cell-dropdown-header {
  color: white;
  background-color: rgb(1, 95, 95);
  padding: $space--xs;
}
.pokedex--cell-dropdown-content {
  color: black;
  background-color: rgb(136, 212, 212);
}
</style>
