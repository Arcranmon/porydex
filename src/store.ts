import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        selectedPokemon: null
    },
    mutations: {
      change(state, selectedPokemon) {
        state.selectedPokemon = selectedPokemon
      }
    },
    getters: {
       selectedPokemon: state => state.selectedPokemon
    }
})