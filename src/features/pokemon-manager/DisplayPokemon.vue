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
          <v-dialog v-model="nicknameDialog" hide-overlay persistent>
            <template v-slot:activator="{}">
              <v-icon @click="nicknameDialog = true" class="edit--symbol"
                >mdi-pencil</v-icon
              >
            </template>
            <v-card>
              <v-card-title>Edit Nickname</v-card-title>
              <v-card-text>
                <nickname-select
                  :pokemon="pokemon"
                  @chose-nickname="nicknameDialog = false"
                />
              </v-card-text>
            </v-card>
          </v-dialog>
          <h2 style="display: inline; margin-right: -1.5rem;">
            {{ pokemon.Nickname }}
          </h2>
          <div>
            <span class="Type" :class="pokemon.Type1">{{ pokemon.Type1 }}</span>
            <span
              v-if="(!pokemon.Monotype)"
              class="Type"
              :class="pokemon.Type2"
              >{{ pokemon.Type2 }}</span
            >
          </div>
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
        lg="7"
      >
        <div class="pokemon-cell">
          <h2 style="text-align: center;">
            Level {{ pokemon.Level }} {{ pokemon.Name }}
          </h2>
        </div>
        <div>
          <v-row no-gutters>
            <v-col cols="2"></v-col>
            <v-col cols="2"></v-col>
            <v-col cols="2">
              <b>Hit Points:</b>
            </v-col>
            <v-col cols="2" class="pokemon-cell-bottom-content">
              {{ pokemon.CurrentHP }} / {{ pokemon.MaxHP }}
              <v-dialog v-model="damageDialog" hide-overlay persistent>
                <template v-slot:activator="{}">
                  <v-icon
                    @click="damageDialog = true"
                    class="edit--symbol"
                    small
                    >mdi-heart</v-icon
                  >
                </template>
                <v-card>
                  <v-card-title>Edit Hit Points</v-card-title>
                  <v-card-text>
                    <v-btn
                      color="success"
                      large
                      tile
                      @click="damageDialog = false"
                      >ACCEPT NEW HP</v-btn
                    >
                    <br />
                    <b>New Current Hit Points:</b>
                    <input v-model="pokemon.CurrentHP" />
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="2"></v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <div class="hp--exterior">
                <div class="hp--interior" :style="healthbar" />
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="pokemon-cell-bottom-header">DEFENSES</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Evasion:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content">{{
              pokemon.Defense('Evasion')
            }}</v-col>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Resolve:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content">{{
              pokemon.Defense('Resolve')
            }}</v-col>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox">Vigor:</v-col>
            <v-col cols="2" class="pokemon-cell-bottom-content">{{
              pokemon.Defense('Vigor')
            }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="pokemon-cell-bottom-header"
              >COMBAT STATISTICS</v-col
            >
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Initiative:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content">{{
              pokemon.Initiative
            }}</v-col>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Movement:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content">{{
              pokemon.Movement
            }}</v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Phys. Damage:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content"
              >+{{ pokemon.PhysicalDamage() }}</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Spec. Damage:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content"
              >+{{ pokemon.SpecialDamage() }}</v-col
            >
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Phys. Armor:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content"
              >+{{ pokemon.PhysicalArmor() }}</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Spec. Armor:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content"
              >+{{ pokemon.SpecialArmor() }}</v-col
            >
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="pokemon-cell-bottom-header"
              >GENERAL STATISTICS</v-col
            >
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox">Size:</v-col>
            <v-col cols="2" class="pokemon-cell-bottom-content">{{
              pokemon.Size
            }}</v-col>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox"
              >Home Turf:</v-col
            >
            <v-col cols="2" class="pokemon-cell-bottom-content">
              <div v-for="i in pokemon.TurfList">
                {{ i }}
                <span v-if="i != pokemon.TurfList[pokemon.TurfList.length - 1]"
                  >,</span
                >
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" class="pokemon-cell-bottom-titlebox">Gifts:</v-col>
            <v-col cols="10" class="pokemon-cell-bottom-content">
              <div v-for="i in pokemon.GiftList">
                {{ i }}
                <span v-if="i != pokemon.GiftList[pokemon.GiftList.length - 1]"
                  >,</span
                >
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
          <v-dialog v-model="skillDialog" hide-overlay persistent>
            <template v-slot:activator="{}">
              <v-icon @click="skillDialog = true" class="edit--symbol"
                >mdi-pencil</v-icon
              >
            </template>
            <v-card>
              <v-card-title>Edit Skills</v-card-title>
              <v-card-text>
                <skill-select
                  :pokemon="pokemon"
                  @chose-skill="skillDialog = false"
                />
              </v-card-text>
            </v-card>
          </v-dialog>
          <h2 style="text-align: center;">Skills</h2>
        </div>
        <v-row no-gutters class="pokemon-cell-bottom-format">
          <v-col cols="10" y>
            <div v-for="(skill, index) in pokemon.Skills.Names">
              <span v-if="index == 0">
                <h3>Action</h3>
              </span>
              <span v-if="index == 3">
                <h3>Clever</h3>
              </span>
              <span v-if="index == 6">
                <h3>Social</h3>
              </span>
              <span
                v-bind:class="{
                  goodskill: pokemon.IsFavored(skill),
                  badskill: pokemon.IsDeficient(skill),
                }"
              >
                <b>{{ skill }}:</b>
              </span>
              <br />
            </div>
            <br />
          </v-col>
          <v-col cols="2" style="text-align: center;">
            <div v-for="(skill, index) in pokemon.Skills.Names">
              <span v-if="index % 3 == 0">
                <h3>
                  <br />
                </h3>
              </span>
              <span v-if="Number(pokemon.Skills[skill]) >= 0">+</span>
              {{ pokemon.Skills[skill] }}
              <br />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokemon-cell">
            <h1>Traits</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pokemon-cell-bottom">
            <show-cards :inputs="pokemon.Traits" job="Traits" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokemon-cell">
            <h1>Ability</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pokemon-cell-bottom">
            <v-dialog v-model="abilityDialog" hide-overlay persistent>
              <template v-slot:activator="{}">
                <v-icon @click="abilityDialog = true" class="edit--symbol"
                  >mdi-pencil</v-icon
                >
              </template>
              <v-card>
                <v-card-title>Edit Ability</v-card-title>
                <v-card-text class="popup">
                  <ability-select
                    :pokemon="pokemon"
                    @chose-ability="abilityDialog = false"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
            <show-cards
              :inputs="[pokemon.Ability]"
              job="Ability"
              :showUses="!newPokemon"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokemon-cell">
            <h1>Role</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pokemon-cell-bottom">
            <v-dialog v-model="roleDialog" hide-overlay persistent>
              <template v-slot:activator="{}">
                <v-icon @click="roleDialog = true" class="edit--symbol"
                  >mdi-pencil</v-icon
                >
              </template>
              <v-card>
                <v-card-title>Edit Role</v-card-title>
                <v-card-text class="popup">
                  <role-select
                    :pokemon="pokemon"
                    @chose-role="roleDialog = false"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
            <show-cards :inputs="[pokemon.Role]" job="Role" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokemon-cell">
            <h1>Basic Attacks</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pokemon-cell-bottom">
            <show-cards
              :inputs="pokemon.BasicAttacks"
              :melee="pokemon.MeleeDamageDie()"
              :range="pokemon.RangedDamageDie()"
              job="Move"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="pokemon-cell">
            <h1>Moves</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pokemon-cell-bottom">
            <v-dialog v-model="moveDialog" hide-overlay persistent>
              <template v-slot:activator="{}">
                <v-icon @click="moveDialog = true" class="edit--symbol"
                  >mdi-pencil</v-icon
                >
              </template>
              <v-card>
                <v-card-title>Edit Moves</v-card-title>
                <v-card-text class="popup">
                  <move-select
                    :pokemon="pokemon"
                    @chose-move="moveDialog = false"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
            <show-cards
              :inputs="pokemon.Moves"
              :melee="pokemon.MeleeDamageDie()"
              :range="pokemon.RangedDamageDie()"
              :showUses="!newPokemon"
              job="Move"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
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
    newPokemon: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      nicknameDialog: false,
      damageDialog: false,
      skillDialog: false,
      abilityDialog: false,
      roleDialog: false,
      moveDialog: false,
    };
  },
  computed: {
    healthbar() {
      return (
        'width: ' +
        this.pokemon.HealthPercent +
        '%;' +
        'background-color:' +
        this.pokemon.HealthColor
      );
    },
  },
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
  text-align: center;
  background-color: darkcyan;
  font-family: $font--standard;
  outline: 2px solid darkslategrey;
  border-radius: 0px;
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
.pokemon-cell-bottom-titlebox {
  font-weight: bold;
  background-color: rgb(92, 146, 146);
  text-indent: $space--xs;
}
.pokemon-cell-bottom-header {
  font-weight: bold;
  background-color: rgb(92, 146, 146);
  text-indent: $space--xs;
  text-align: center;
  outline: 2px solid black;
  margin: 2px;
}
.pokemon-cell-bottom-content {
  text-indent: $space--m;
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
.input {
  text-decoration: underline;
}
.hp--exterior {
  border: 1px solid black;
  border-radius: 10px;
  height: 20px;
  align-content: left;
  margin: $space--s;
}
.hp--interior {
  border: 0px solid transparent;
  border-radius: 10px;
  margin: 0 auto;
  height: 18px;
  display: inline-block;
}
</style>
