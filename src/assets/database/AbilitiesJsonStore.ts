import AllAbilities from '@/assets/database/abilities.json';
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { Ability } from '@/class';

@Module({
  name: 'abilitiesJson',
})
export class AbilitiesJsonStore extends VuexModule {
  get allAbilities(): any {
    return AllAbilities.map((x) => Ability.Deserialize(<IAbilityData>x));
  }
  get getAbilityByName(): any {
    return (abilityName: string) => {
      var temp = AllAbilities.find((x) => x.name.trim() === abilityName.trim());
      return Ability.Deserialize(<IAbilityData>temp);
    };
  }
}
