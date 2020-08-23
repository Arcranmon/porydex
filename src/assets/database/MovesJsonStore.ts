import AllMoves from '@/assets/database/moves.json';
import BasicAttacks from '@/assets/database/basicattacks.json';
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { Move } from '@/class';

@Module({
  name: 'movesJson',
})
export class MovesJsonStore extends VuexModule {
  get getMoveByName(): any {
    return (moveName: string) => {
      var temp = AllMoves.find((x) => x.name.trim() === moveName.trim());
      if (temp == undefined) {
        return new Move().ErrorMove(moveName);
      } else {
        return Move.Deserialize(<IMoveData>temp);
      }
    };
  }
  get getBasicAttackByName(): any {
    return (moveName: string, moveType: string, moveDamage: string) => {
      var ba = Move.Deserialize(
        <IMoveData>BasicAttacks.find((x) => x.name === moveName)
      );
      ba.Type = moveType;
      ba.DamageType = moveDamage;
      return ba;
    };
  }
  get allMoves(): any {
    return (
      typeFilter: string,
      categoryFilter: string,
      apFilter: string,
      defenseFilter: string
    ) => {
      if (typeFilter == 'All') {
        typeFilter = '';
      }
      if (categoryFilter == 'All') {
        categoryFilter = '';
      }
      if (apFilter == 'All') {
        apFilter = '';
      }
      if (defenseFilter == 'All') {
        defenseFilter = '';
      }

      var filteredMoves = AllMoves.filter(
        (x) =>
          x.type.includes(typeFilter) &&
          x.category.includes(categoryFilter) &&
          x.action.includes(apFilter) &&
          (!x.defense || x.defense.includes(defenseFilter))
      );

      return filteredMoves.map((x) => Move.Deserialize(<IMoveData>x));
    };
  }
}
