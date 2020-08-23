import Vue from 'vue';
import Vuex from 'vuex';
import { PokemonManagementStore } from './features/pokemon-manager/store';
import { AbilitiesJsonStore } from './assets/database/AbilitiesJsonStore';
import { MovesJsonStore } from './assets/database/MovesJsonStore';
import { PokemonJsonStore } from './assets/database/PokemonJsonStore';
import { RolesJsonStore } from './assets/database/RolesJsonStore';
import { TraitsJsonStore } from './assets/database/TraitsJsonStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pokemon: PokemonManagementStore,
    abilitiesJson: AbilitiesJsonStore,
    pokemonJson: PokemonJsonStore,
    movesJson: MovesJsonStore,
    rolesJson: RolesJsonStore,
    traitsJson: TraitsJsonStore,
  },
});

export {
  store,
  AbilitiesJsonStore,
  PokemonManagementStore,
  MovesJsonStore,
  PokemonJsonStore,
  RolesJsonStore,
  TraitsJsonStore,
};
