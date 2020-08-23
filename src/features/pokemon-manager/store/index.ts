import { Pokemon, Skills, Move } from '@/class';
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';

function savePokemons(pokemons: Pokemon[]) {
  const stringed = JSON.stringify(pokemons.map((x) => Pokemon.Serialize(x)));
  localStorage.setItem('pokemon_box.json', stringed);
}

@Module({
  name: 'pokemon',
})
export class PokemonManagementStore extends VuexModule {
  public Pokemons: Pokemon[] = [];

  @Mutation
  private LoadPokemon(pokemonData: string): void {
    var tempData = JSON.parse(pokemonData);
    this.Pokemons = tempData.map((x) => Pokemon.Deserialize(x));
  }

  @Action
  public DeletePokemon(index: number): void {
    this.Pokemons.splice(index, 1);
    savePokemons(this.Pokemons);
  }

  @Action
  public AddPokemon(pokemon: Pokemon): void {
    pokemon.ID =
      String(pokemon.Nickname) +
      String(pokemon.Name) +
      String(pokemon.Ability.Name) +
      String(pokemon.Role.Name) +
      String(Math.random());
    this.Pokemons.push(pokemon);
    savePokemons(this.Pokemons);
  }

  @Action
  public SavePokemons(): void {
    savePokemons(this.Pokemons);
  }

  @Action({ rawError: true })
  public async loadPokemon() {
    this.LoadPokemon(localStorage.getItem('pokemon_box.json'));
  }
}
