import AllPokemon from '@/assets/database/pokemon.json';
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { Pokemon } from '@/class';

@Module({
  name: 'pokemonJson',
})
export class PokemonJsonStore extends VuexModule {
  get filteredPokemon(): any {
    return (typeFilter: string, roleFilter: string, turfFilter: string) => {
      function hasType(array) {
        if (typeFilter == undefined) {
          return true;
        }
        return (
          array.type1.includes(typeFilter) ||
          (array.hasOwnProperty('type2') && array.type2.includes(typeFilter))
        );
      }
      function hasRole(array) {
        if (roleFilter == undefined) {
          return true;
        }
        return (
          array.role1.includes(roleFilter) ||
          array.role2.includes(roleFilter) ||
          array.role3.includes(roleFilter)
        );
      }
      function hasTurf(array) {
        if (turfFilter == undefined) {
          return true;
        }
        return (
          (array.hasOwnProperty('turf1') && array.turf1.includes(turfFilter)) ||
          (array.hasOwnProperty('turf2') && array.turf2.includes(turfFilter))
        );
      }
      var filteredMon = AllPokemon.filter(
        (x) => hasType(x) && hasRole(x) && hasTurf(x)
      );

      return filteredMon.map((x) => Pokemon.Deserialize(<IPokemonData>x));
    };
  }
  get availableTo(): any {
    return (search: string) => {
      var filteredMon = AllPokemon.filter((x) =>
        Object.values(x).includes(search)
      );
      return filteredMon.map((x) => x.name);
    };
  }
}
