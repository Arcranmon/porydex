import { Pokemon } from '@/class';
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import Skills from '@/classes/Skills';
import { VCalendarMonthly } from 'vuetify/lib';

function savePokemons(pokemons: Pokemon[]) {
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
    for (let ii in this.Pokemons) {
      this.Pokemons[ii] = Object.assign(new Pokemon(), this.Pokemons[ii]);
      this.Pokemons[ii].Skills = Object.assign(
        new Skills(),
        this.Pokemons[ii].Skills
      );
    }
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
      String(pokemon.Species) +
      String(pokemon.Ability) +
      String(pokemon.RoleName) +
      String(Math.random());
    this.Pokemons.push(pokemon);
    savePokemons(this.Pokemons);
  }

  @Action
  public UpdatePokemon(newmon: Pokemon): void {
    for (let ii in this.Pokemons) {
      if (newmon.ID == this.Pokemons[ii].ID) {
        this.Pokemons[ii] = newmon;
      }
    }
    savePokemons(this.Pokemons);
  }

  @Action({ rawError: true })
  public async loadPokemon() {
    this.LoadPokemon(localStorage.getItem('pokemon_box.json'));
  }
}
