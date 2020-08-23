import AllTraits from '@/assets/database/traits.json';
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { Trait } from '@/class';

@Module({
  name: 'traitsJson',
})
export class TraitsJsonStore extends VuexModule {
  get allTraits(): any {
    return AllTraits.map((x) => Trait.Deserialize(<ITraitData>x));
  }

  get getTraitByName(): any {
    return (name: string) => {
      var temp = AllTraits.find((x) => x.name.trim() === name.trim());
      if (temp == undefined) {
        return new Trait().ErrorTrait(name);
      } else {
        return Trait.Deserialize(<ITraitData>temp);
      }
    };
  }
}
