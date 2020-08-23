<template>
  <v-row justify="center">
    <v-col cols="2" class="sidebar">
      <span v-for="(pokemon, index) in pokemons" :key="index">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="button--template"
              @click="
                (selectedPokemon = pokemon),
                  (pokemonSelected = true),
                  (selectedIndex = index)
              "
              v-bind="attrs"
              v-on="on"
              ><span>{{ pokemon.Nickname }} <br /> </span
            ></v-btn>
          </template>
          {{ pokemon.Summary }}
        </v-tooltip>
      </span>
    </v-col>
    <v-col cols="10">
      <span v-if="pokemonSelected" class="topbar">
        <v-dialog v-model="sceneDialog" hide-overlay>
          <template v-slot:activator="{}">
            <v-btn
              @click="sceneDialog = true"
              class="button--template button--topbar"
            >
              New Scene (WIP)
            </v-btn>
          </template>

          <v-card>
            <v-card-title>Refresh Scene</v-card-title>
            <v-card-text
              >This doesn't do anything quite yet, but is a WIP!
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="restDialog" hide-overlay>
          <template v-slot:activator="{}">
            <v-btn
              @click="restDialog = true"
              class="button--template button--topbar"
            >
              Rest (WIP)
            </v-btn>
          </template>

          <v-card>
            <v-card-title>Zzzz...</v-card-title>
            <v-card-text
              >This doesn't do anything quite yet, but is a WIP!
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="levelDialog" hide-overlay>
          <template v-slot:activator="{}">
            <v-btn
              @click="levelDialog = true"
              class="button--template button--topbar"
            >
              Level Up (WIP)
            </v-btn>
          </template>

          <v-card>
            <v-card-title>Level Up!</v-card-title>
            <v-card-text
              >This doesn't do anything quite yet, but is a WIP!
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="deleteDialog" hide-overlay>
          <template v-slot:activator="{}">
            <v-btn
              @click="deleteDialog = true"
              class="button--template button--topbar"
            >
              Delete {{ selectedPokemon.Nickname }}
            </v-btn>
          </template>

          <v-card>
            <v-card-title>Are You Sure?</v-card-title>
            <v-card-text>
              Are you sure you want to delete this Pokemon? This cannot be
              undone! <br /><br />
              <v-flex>
                <div class="text-xs-center">
                  <v-btn
                    color="button--template"
                    @click="deletePokemon(), (pokemonSelected = false)"
                  >
                    Delete {{ selectedPokemon.Nickname }}
                  </v-btn>
                </div>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-dialog>
      </span>
      <span v-if="pokemonSelected">
        <display-pokemon :pokemon="selectedPokemon" /> </span
    ></v-col>
  </v-row>
</template>

<script>
import Vue from 'vue';
import { getModule } from 'vuex-module-decorators';
import { PokemonManagementStore } from '@/store';
import DisplayPokemon from './DisplayPokemon';
import { Pokemon } from '@/class';
import store from '@/store';

export default Vue.extend({
  name: 'pokemon-box',
  components: { DisplayPokemon },
  data() {
    return {
      selectedPokemon: new Pokemon(),
      pokemonSelected: false,
      selectedIndex: Number,
      sceneDialog: false,
      restDialog: false,
      levelDialog: false,
      deleteDialog: false,
    };
  },
  methods: {
    deletePokemon() {
      const store = getModule(PokemonManagementStore, this.$store);
      store.DeletePokemon(this.selectedIndex);
    },
    savePokemon() {
      const store = getModule(PokemonManagementStore, this.$store);
      store.SavePokemons();
    },
  },
  computed: {
    pokemons() {
      const store = getModule(PokemonManagementStore, this.$store);
      store.loadPokemon();
      return store.Pokemons;
    },
  },
});
</script>

<style scoped lang="scss">
.button--template {
  border: 5px double black;
  border-radius: 10px;
  font-family: $font--gaming;
  font-size: $font-size--m;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  height: 100%;
  width: 100%;
}
.button--topbar {
  width: 25%;
}
.topbar {
  padding: $space--s;
  padding-bottom: 0;
  display: flex;
  align-items: center;
}
.sidebar {
  background: $color--pory;
  padding: $space--m;
  border-right: 5px double black;
}
</style>
