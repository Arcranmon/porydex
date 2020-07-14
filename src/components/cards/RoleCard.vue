<template>
    <div>
        <div class="d-flex flex-row">   
            <v-card height="100%" outline flat tile>
                <div class="role--icon" v-bind:class="[role.role]">
                    <img :src='require("../../assets/" + role.role + ".png")' max-width=80%/>
                </div>
            </v-card>
            <h3 class="role--header">
                {{roleName}}
            </h3>  
        </div>
        <div class="role--content text-center font-italic">{{role.summary}}</div>
            <v-card outline flat tile>
                <div class="role--content">
                    <b>HP:</b> {{role.hp}} <br>
                    <b>Defenses:</b> {{role.def1}}, {{role.def2}}, {{role.def3}} <br>
                    <b>Initiative Mod:</b> {{role.init}} <br><br>                            
                    <h3 class="text-center">{{roleName}} Abilities</h3> <br>   
                    <span v-if="numAbilities>=1"> 
                        <b>{{role.ability1}}:</b> {{role.ability1effect}}    <br>                    
                    </span>   
                    <span v-if="numAbilities>=2"> 
                        <b>{{role.ability2}}:</b> {{role.ability2effect}}     <br>                   
                    </span>   
                    <span v-if="numAbilities>=3"> 
                        <b>{{role.ability3}}:</b> {{role.ability3effect}}   <br>                     
                    </span>   
                    <span v-if="numAbilities>=4"> 
                        <b>{{role.ability4}}:</b> {{role.ability4effect}}    <br>                    
                    </span>
                </div>
            </v-card>
        <available :name="roleName" />  
    </div>
</template>


<script>
    import Vue from 'vue'
    import allRoles from '@/assets/database/roles.json'
    import Available from './Available'

    export default Vue.extend({
        name: 'role-card',
        props: {
            roleName: {
                type: String,
                required: true,
            },
            showA: {
              type: Boolean,
              required: false,
              default: false
            }
        },
        data() {  
            return {
                allRoles
            }

        },
        computed: {
            role: function() {
                var rl = []
                for(const rl of this.allRoles){
                  if(this.roleName == rl.name){
                    return rl
                  }
                }
            },
            numAbilities: function() {
                if(this.role.ability4){
                    return 4
                }
                else if(this.role.ability3){
                    return 3
                }
                else if(this.role.ability2){
                    return 2
                }
                else if(this.role.ability1){
                    return 1
                }
            }
        },
        components: {
            Available
        }
    
    })
</script>

<style scoped lang="scss">
  .role--header {
    align-items: center;
    background-color: grey;
    border: 2px solid black;
    display: flex;
    font-size: $font-size--l;
    padding: $space--m;
    width: 100%;
  }
  .role--content {
    background-color: $color--grey-light;
    border: 2px solid black;
    border-top: 0px solid black;
    padding: $space--xs;
    text-align: left;
  }
  .role--icon {
    align-items: center;
    border:2px solid black;
    border-right: 0;
    display: flex;
    height: 6em;
    justify-content: center; 
    width: 6em;
  }
  .DPS{
      background-color: $color--dps;
  }
  .Tank{
      background-color: $color--tank
      }
  .Support{
      background-color: $color--support
  }
</style>