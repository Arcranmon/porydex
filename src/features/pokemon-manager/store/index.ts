import { Pokemon } from '@/class';
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import Skills from '@/classes/Skills';

async function savePokemons(pokemons: Pokemon[]) {
  const stringed = JSON.stringify(pokemons);
  localStorage.setItem('pokemon_box.json', stringed);
}

@Module({
  name: 'pokemon',
})
export class PokemonManagementStore extends VuexModule {
  public Pokemons: Pokemon[] = [];

  @Mutation
  private LoadPokemon(pokemonData: string): void {
    this.Pokemons = [];
    var rawObjs = JSON.parse(pokemonData);
    for (let rawObj of rawObjs) {
      rawObj.skills = Object.assign(new Skills(), rawObj.skills);
      this.Pokemons.push(Object.assign(new Pokemon(), rawObj));
    }
  }

  @Action
  public AddPokemon(pokemon: Pokemon): void {
    this.loadPokemon();
    this.Pokemons.push(pokemon);
    savePokemons(this.Pokemons);
  }

  @Action({ rawError: true })
  public async loadPokemon() {
    this.LoadPokemon(localStorage.getItem('pokemon_box.json'));
  }
}
