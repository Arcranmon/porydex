<template>
  <v-container fluid>
    <v-stepper v-model="step">
      <v-stepper-header class="builder--header">
        <v-stepper-step editable step="1">
          Select a Pokemon!
        </v-stepper-step>
        <v-stepper-step editable step="2">
          Select a Role!
        </v-stepper-step>
        <v-stepper-step editable step="3">
          Select an Ability!
        </v-stepper-step>
        <v-stepper-step editable step="4">
          Select a Starting Move!
        </v-stepper-step>
        <v-stepper-step editable step="5">
          Distribute Skills!
        </v-stepper-step>
        <v-stepper-step editable step="6">
          Choose a Nickname!
        </v-stepper-step>
        <v-stepper-step editable step="7">
          Preview!
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items class="builder--body">
        <v-stepper-content step="1">
          <v-btn
            color="success"
            large
            tile
            @click="step++"
            :disabled="!pokemon.HasSpecies"
          >
            <span v-if="!pokemon.HasSpecies">CHOOSE A POKEMON</span>
            <span v-else>CHOOSE {{ pokemon.species }}</span>
          </v-btn>
          <pokedex-browser @chose="updatePokemon" />
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-btn
            color="success"
            large
            tile
            @click="step++"
            :disabled="!pokemon.HasRole"
          >
            <span v-if="!pokemon.HasRole">CHOOSE A ROLE</span>
            <span v-else>CHOOSE {{ pokemon.role }}</span>
          </v-btn>
          <show-cards
            :names="pokemon.RoleList"
            job="Role"
            :selectButton="true"
            @chose="updateRole"
          />
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-btn
            color="success"
            large
            tile
            @click="step++"
            :disabled="!pokemon.HasAbility"
          >
            <span v-if="!pokemon.HasAbility">CHOOSE AN ABILITY</span>
            <span v-else>CHOOSE {{ pokemon.ability }}</span>
          </v-btn>
          <show-cards
            :names="pokemon.AbilityList"
            job="Ability"
            :selectButton="true"
            @chose="updateAbility"
          />
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-btn
            color="success"
            large
            tile
            @click="
              step++;
              updateMove(selectedMove);
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
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-btn
            color="success"
            large
            tile
            @click="step++"
            :disabled="
              !(pokemon.HasNoSkillPoints && pokemon.FavoredSkillPoints >= 2)
            "
          >
            CONTINUE
          </v-btn>
          <div>
            <b>{{ pokemon.SkillPoints }} Remaining Skill Points</b><br />
            <span v-if="(pokemon.FavoredSkillPoints < 2)"
              ><i
                >Must add {{ 2 - pokemon.FavoredSkillPoints }} more points to
                Favored Skills.</i
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
        </v-stepper-content>
        <v-stepper-content step="6">
          <v-btn
            color="success"
            large
            tile
            @click="step++, (pokemon.Nickname = nickname)"
            :disabled="(nickname == '')"
            ><span v-if="(nickname == '')">CHOOSE A NICKNAME</span>
            <span v-else>CHOOSE {{ nickname }}</span></v-btn
          >
          <br />
          <br /><b>Nickname: </b
          ><input v-model="nickname" placeholder="Input Nickname" />
        </v-stepper-content>
        <v-stepper-content step="7">
          <v-btn color="success" large tile @click="savePokemon()"
            >SAVE {{ pokemon.nickname }}</v-btn
          ><display-pokemon :pokemon="pokemon" />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { getModule } from 'vuex-module-decorators';
import { PokemonManagementStore } from '@/store';
import { Pokemon } from '@/class';
import PokedexBrowser from '@/features/pokedex/PokedexBrowser.vue';
import ShowCards from '@/components/cards/ShowCards.vue';
import DisplayPokemon from '../pokemon-manager/DisplayPokemon.vue';
import allRoles from '@/assets/database/roles.json';
import allTraits from '@/assets/database/traits.json';

export default Vue.extend({
  name: 'pokemon-builder',
  components: { PokedexBrowser, ShowCards, DisplayPokemon },
  data: () => ({
    step: 1,
    pokemon: {},
    selectedMove: '',
    nickname: '',
    allRoles,
    allTraits,
  }),
  created() {
    this.pokemon = new Pokemon();
  },
  methods: {
    updatePokemon(variable) {
      this.pokemon.Raw = variable;
      for (const tr of this.allTraits) {
        if (this.pokemon.TraitList.includes(tr.name)) {
          this.pokemon.AddTrait(tr);
        }
      }
    },
    updateRole(variable) {
      for (const rl of this.allRoles) {
        if (variable == rl.name) {
          this.pokemon.Role = rl;
        }
      }
    },
    updateAbility(variable) {
      this.pokemon.ability = variable;
    },
    selectMove(variable) {
      this.selectedMove = variable;
    },
    updateMove(variable) {
      if (this.pokemon.HasStartingMove) {
        this.pokemon.PopMove();
      }
      this.pokemon.AddMove(variable);
    },
    savePokemon() {
      const store = getModule(PokemonManagementStore, this.$store);
      store.AddPokemon(this.pokemon);
      this.$router.push('pokemon-manager');
    },
  },
});
</script>

<style scoped lang="scss">
.builder--header {
  background: $color--pokedex-light;
}
.builder--body {
  background: $color--off-white;
}
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
</style>
