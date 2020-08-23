import AllRoles from '@/assets/database/roles.json';
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { Role } from '@/class';

@Module({
  name: 'rolesJson',
})
export class RolesJsonStore extends VuexModule {
  get filteredRole(): any {
    return (roleFilter: string) => {
      function hasRole(array) {
        if (roleFilter == 'All') {
          return true;
        }
        return array.role.includes(roleFilter);
      }
      var filteredRoles = AllRoles.filter((x) => hasRole(x));

      return filteredRoles.map((x) => Role.Deserialize(<IRoleData>x));
    };
  }

  get getRoleByName(): any {
    return (roleName: string) => {
      var temp = AllRoles.find((x) => x.name.trim() === roleName.trim());
      return Role.Deserialize(<IRoleData>temp);
    };
  }
}
