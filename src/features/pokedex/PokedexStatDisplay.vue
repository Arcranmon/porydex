<template>
  <!-- 70% width to work with -->
  <div class="pokedex--wrapper" v-if="pokemon.HasSpecies">
    <v-row flex fluid fill-height no-gutters class="pokedex--header">
      <v-col cols="12" class="flex flex-column" lg="4">
        <div class="pokedex--header-content-left">
          <h1>{{ pokemon.Name }}</h1>
          <span>
            <span class="Type" :class="pokemon.Type1">{{ pokemon.Type1 }}</span>
            <span
              v-if="!pokemon.Monotype"
              class="Type"
              :class="pokemon.Type2"
              >{{ pokemon.Type2 }}</span
            ></span
          ><br />
          <img :src="pokemon.Image" style="max-width: 60%;" />
        </div>
      </v-col>
      <v-col cols="6" class="pokedex--header-content-right" lg="4">
        <div class="pokedex--name-header">
          <h3 class="text-center">Basic Stastics</h3>
          <b>Favored Skills:</b> {{ pokemon.Skill1 }}, {{ pokemon.Skill2 }}
          <br />
          <b>Deficient Skill:</b> {{ pokemon.BadSkill }} <br />
          <b>Home Turf: </b>
          <span v-for="i in pokemon.TurfList"
            >{{ i
            }}<span v-if="i != pokemon.TurfList[pokemon.TurfList.length - 1]"
              >,
            </span></span
          ><br />
          <b>Gifts: </b>
          <span v-for="i in pokemon.GiftList"
            >{{ i
            }}<span v-if="i != pokemon.GiftList[pokemon.GiftList.length - 1]"
              >,
            </span></span
          ><br />
          <b>Initiative:</b> {{ pokemon.Initiative }} <br />
          <b>Movement:</b> {{ pokemon.Movement }}
          <br />
          <b>Size:</b> {{ pokemon.Size }} <br />
          <br />
          <b>Defense Priority:</b> {{ pokemon.DefenseOrder }} <br />
          <b>Basic Attack: </b> {{ pokemon.BasicAttackText }} <br />
        </div>
      </v-col>
      <v-col cols="6" class="pokedex--header-content-right" lg="4">
        <h3 class="text-center">Traits</h3>
        <span v-for="i in pokemon.Traits"
          ><parse-trait :trait="i" /><br /> </span
        ><br />
      </v-col>
    </v-row>
    <div class="pokedex--cell-header">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokedex--cell-dropdown-header"
            ><h1>Roles</h1></v-expansion-panel-header
          >
          <v-expansion-panel-content class="pokedex--cell-dropdown-content">
            <show-cards :inputs="pokemon.Roles" job="Role" />
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
            <show-cards :inputs="pokemon.Abilities" job="Ability" />
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
            <show-cards :inputs="pokemon.StartingMoves" job="Move" />
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
            <show-cards :inputs="pokemon.Tier1NaturalMoveList" job="Move" />
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
            <show-cards :inputs="pokemon.Tier1TutorMoveList" job="Move" />
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
import { Pokemon } from '@/class';
import '@/styles/types.scss';

export default Vue.extend({
  name: 'pokemon-stat-display',
  components: {
    ShowCards,
    ParseTrait,
  },
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
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
