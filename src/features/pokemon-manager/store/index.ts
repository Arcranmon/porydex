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
    this.Pokemons = JSON.parse(pokemonData);
    var ii = 0;
    for (let pokemon of this.Pokemons) {
      pokemon.Skills = Object.assign(new Skills(), pokemon.Skills);
      this.Pokemons[ii] = Object.assign(new Pokemon(), pokemon);
      ii += 1;
    }
  }

  @Action
  public AddPokemon(pokemon: Pokemon): void {
    if (Boolean(localStorage.getItem('pokemon_box.json'))) {
      this.loadPokemon();
    }
    this.Pokemons.push(pokemon);
    savePokemons(this.Pokemons);
  }

  @Action({ rawError: true })
  public async loadPokemon() {
    this.LoadPokemon(localStorage.getItem('pokemon_box.json'));
  }
}
