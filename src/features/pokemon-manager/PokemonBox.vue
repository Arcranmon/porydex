<template>
  <v-row justify="center">
    <v-col cols="2" class="sidebar">
      <span v-for="(pokemon, index) in pokemons" :key="pokemon">
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
        <v-dialog v-model="dialog" hide-overlay>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="button--template button--delete">
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
                    color="button--template button--delete"
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

export default Vue.extend({
  name: 'pokemon-box',
  components: { DisplayPokemon },
  data() {
    return {
      selectedPokemon: new Pokemon(),
      pokemonSelected: false,
      selectedIndex: Number,
    };
  },
  methods: {
    deletePokemon() {
      const store = getModule(PokemonManagementStore, this.$store);
      store.DeletePokemon(this.selectedIndex);
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
  background: white;
  border: 5px double black;
  border-radius: 10px;
  color: black;
  font-family: $font--gaming;
  font-size: $font-size--m;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  height: 100%;
}
.button--delete {
  background: red;
  color: red;
  width: 100%;
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
