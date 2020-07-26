import Vue from 'vue';
import Vuex from 'vuex';
import { PokemonManagementStore } from './features/pokemon-manager/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pokemon: PokemonManagementStore,
  },
});

export { store, PokemonManagementStore };
