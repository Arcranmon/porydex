<template>
  <v-row>
    <v-col cols="2">
      <span v-for="pokemon in pokemons" :key="pokemon">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="box--button"
              @click="selectedPokemon = pokemon"
              v-bind="attrs"
              v-on="on"
              ><span class="box-button-text"
                >{{ pokemon.Nickname }} <br /> </span
            ></v-btn>
          </template>
          {{ pokemon.Summary }}
        </v-tooltip>
      </span>
    </v-col>
    <v-col cols="10"> <display-pokemon :pokemon="selectedPokemon" /></v-col>
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
    };
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
.box--button {
  margin: $space--s;
  padding: $space--s;
  background: white;
  border: 5px double black;
  border-radius: 10px;
  color: black !important;
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
</style>
