<template>
  <div style="padding: 15px;">
    <v-row flex fluid fill-height no-gutters>
      <v-col
        cols="12"
        class="flex flex-column"
        style="flex-direction: column;"
        lg="3"
      >
        <div class="pokemon--cell-image">
          <h2 style="display: inline;">
            {{ pokemon.Nickname }}, Level {{ pokemon.Level }}
            {{ pokemon.Species }}
          </h2>
          <v-img
            :src="require('../../assets/pokemon/' + pokemon.DexNumber + '.png')"
            contain
            style="width: auto; height: auto;"
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
          <v-dialog v-model="nicknameDialog" hide-overlay persistent>
            <template v-slot:activator="{}">
              <v-icon @click="nicknameDialog = true" class="edit--symbol">
                mdi-pencil
              </v-icon>
            </template>
            <v-card>
              <v-card-title>Edit Nickname</v-card-title>
              <v-card-text>
                <nickname-select
                  :pokemon="pokemon"
                  @chose-nickname="savePokemon(), (nicknameDialog = false)"
              /></v-card-text>
            </v-card>
          </v-dialog>
          <h2 style="text-align: center;">
            Basic
          </h2>
        </div>
        <div class="pokemon-cell-bottom-format">
          <v-row no-gutters>
            <v-col cols="6"> <b>Type:</b> </v-col>
            <v-col cols="6">
              <span class="Type" :class="pokemon.Type1">{{
                pokemon.Type1
              }}</span>
              <span
                v-if="(pokemon.NumTypes == 2)"
                class="Type"
                :class="pokemon.Type2"
                >{{ pokemon.Type2 }}</span
              >
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="6">
              <b>Level:</b>
            </v-col>

            <v-col cols="6"> {{ pokemon.Level }} </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="6">
              <b>Size:</b>
            </v-col>

            <v-col cols="6"> {{ pokemon.Size }} </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="6"> <b>Home Turf:</b> </v-col>
            <v-col cols="6">
              <div v-for="i in pokemon.TurfList" :key="i">
                {{ i
                }}<span
                  v-if="i != pokemon.TurfList[pokemon.TurfList.length - 1]"
                  >,
                </span>
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="6"> <b>Gifts:</b> </v-col>
            <v-col cols="6">
              <div v-for="i in pokemon.GiftList" :key="i">
                {{ i
                }}<span
                  v-if="i != pokemon.GiftList[pokemon.GiftList.length - 1]"
                  >,
                </span>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="2"
      >
        <div class="pokemon-cell">
          <h2 style="text-align: center;">Combat</h2>
        </div>
        <v-row no-gutters class="pokemon-cell-bottom-format">
          <v-col cols="10">
            <b>HP:</b> <br />
            <b>Initiative:</b> <br />
            <b>Movement:</b> <br />
            <b>Evasion:</b> <br />
            <b>Resolve:</b> <br />
            <b>Vigor:</b> <br />
            <b>Physical Damage:</b> <br />
            <b>Special Damage:</b> <br />
            <b>Physical Armor:</b> <br />
            <b>Special Armor:</b> <br />
          </v-col>
          <v-col cols="2" style="text-align: left;">
            {{ pokemon.MaxHP }} <br />
            {{ pokemon.Init }} <br />
            {{ pokemon.Movement }}
            <br />
            {{ pokemon.DefenseStat('Evasion') }} <br />
            {{ pokemon.DefenseStat('Resolve') }}<br />
            {{ pokemon.DefenseStat('Vigor') }}<br />
            {{ pokemon.PhysicalDamage() }}<br />
            {{ pokemon.SpecialDamage() }}<br />
            {{ pokemon.PhysicalArmor() }}<br />
            {{ pokemon.SpecialArmor() }}<br />
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
          <v-dialog v-model="skillDialog" hide-overlay persistent>
            <template v-slot:activator="{}">
              <v-icon @click="skillDialog = true" class="edit--symbol">
                mdi-pencil
              </v-icon>
            </template>
            <v-card>
              <v-card-title>Edit Skills</v-card-title>
              <v-card-text>
                <skill-select
                  :pokemon="pokemon"
                  @chose-skill="savePokemon(), (skillDialog = false)"
              /></v-card-text>
            </v-card>
          </v-dialog>
          <h2 style="text-align: center;">Skills</h2>
        </div>
        <v-row no-gutters class="pokemon-cell-bottom-format">
          <v-col cols="10">
            <div v-for="(skill, index) in pokemon.Skills.names" :key="skill">
              <span v-if="index == 0"><h3>Action</h3></span>
              <span v-if="index == 3"><h3>Clever</h3></span>
              <span v-if="index == 6"><h3>Social</h3></span>
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
          <v-col cols="2" style="text-align: center;">
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
            class="pokemon-cell-bottom-format"
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
          <v-dialog v-model="abilityDialog" hide-overlay persistent>
            <template v-slot:activator="{}">
              <v-icon @click="abilityDialog = true" class="edit--symbol">
                mdi-pencil
              </v-icon>
            </template>
            <v-card>
              <v-card-title>Edit Ability</v-card-title>
              <v-card-text class="popup">
                <ability-select
                  :pokemon="pokemon"
                  @chose-ability="savePokemon(), (abilityDialog = false)"
              /></v-card-text>
            </v-card>
          </v-dialog>
          <h2 style="text-align: center;">Ability</h2>
        </div>
        <show-cards :names="[pokemon.Ability]" job="Ability" />
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="6"
      >
        <div class="pokemon-cell">
          <v-dialog v-model="roleDialog" hide-overlay persistent>
            <template v-slot:activator="{}">
              <v-icon @click="roleDialog = true" class="edit--symbol">
                mdi-pencil
              </v-icon>
            </template>
            <v-card>
              <v-card-title>Edit Role</v-card-title>
              <v-card-text class="popup">
                <role-select
                  :pokemon="pokemon"
                  @chose-role="savePokemon(), (roleDialog = false)"
              /></v-card-text>
            </v-card>
          </v-dialog>
          <h2 style="text-align: center;">Role</h2>
        </div>
        <show-cards :names="[pokemon.RoleName]" job="Role" />
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
          <h2 style="text-align: center;">Basic Attacks</h2>
        </div>
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="12"
      >
        <show-cards
          :names="pokemon.BasicAttackList()"
          :melee="pokemon.MeleeDamageDie()"
          :range="pokemon.RangedDamageDie()"
          :basicType="pokemon.BasicAttackTypes()"
          :basicDamage="pokemon.BasicAttackDamage()"
          job="BA"
        />
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
          <v-dialog v-model="moveDialog" hide-overlay persistent>
            <template v-slot:activator="{}">
              <v-icon @click="moveDialog = true" class="edit--symbol">
                mdi-pencil
              </v-icon>
            </template>
            <v-card>
              <v-card-title>Edit Moves</v-card-title>
              <v-card-text class="popup">
                <move-select
                  :pokemon="pokemon"
                  @chose-move="savePokemon(), (moveDialog = false)"
              /></v-card-text>
            </v-card>
          </v-dialog>
          <h2 style="text-align: center;">Moves</h2>
        </div>
      </v-col>
      <v-col
        cols="12"
        class="flex flex-column pokemon-cell-bottom"
        style="flex-direction: column;"
        lg="12"
      >
        <show-cards
          :names="pokemon.MoveList"
          :melee="pokemon.MeleeDamageDie()"
          :range="pokemon.RangedDamageDie()"
          job="Move"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue';
import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import { Pokemon } from '@/class';
import { PokemonManagementStore } from '@/store';
import ShowCards from '@/components/cards/ShowCards';
import ParseTrait from '@/components/ParseTrait';
import NicknameSelect from '@/features/pokemon-builder/NicknameSelect';
import SkillSelect from '@/features/pokemon-builder/SkillSelect';
import AbilitySelect from '@/features/pokemon-builder/AbilitySelect';
import RoleSelect from '@/features/pokemon-builder/RoleSelect';
import MoveSelect from '@/features/pokemon-builder/MoveSelect';

export default Vue.extend({
  name: 'display-pokemon',
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
  },
  methods: {
    savePokemon() {
      const store = getModule(PokemonManagementStore, this.$store);
      store.UpdatePokemon(this.pokemon);
    },
  },
  data() {
    return {
      nicknameDialog: false,
      skillDialog: false,
      abilityDialog: false,
      roleDialog: false,
      moveDialog: false,
    };
  },
  computed: {},
  components: {
    ShowCards,
    ParseTrait,
    NicknameSelect,
    SkillSelect,
    AbilitySelect,
    RoleSelect,
    MoveSelect,
  },
});
</script>

<style scoped lang="scss">
.pokemon--cell-image {
  text-align: center;
  font-family: $font--standard;
  white-space: normal;
  background-color: $color--pokedex-light;
  border: $space--xs solid darkslategrey;
  outline: 2px solid darkslategrey;
  height: 100%;
}
.pokemon-cell {
  background-color: darkcyan;
  font-family: $font--standard;
  border-bottom: 2px solid darkslategrey;
  font-size: $font-size--l;
}
.pokemon-cell-bottom {
  color: black;
  background-color: rgb(136, 212, 212);
  outline: 2px solid darkslategrey;
  font-family: $font--standard;
  font-size: $font-size--m;
}
.pokemon-cell-bottom-format {
  padding: $space--xs;
}
.goodskill {
  color: darkgreen;
}
.badskill {
  color: darkred;
}
.wrapper {
  display: flex;
  color: black;
}
.edit--symbol {
  float: right;
}
.popup {
  color: black;
}
</style>
