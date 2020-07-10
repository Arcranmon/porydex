<template>
    <div>        
            <v-row no-gutters>
                <v-col cols="2" class="flex" style="flex-direction:column;">
                    <v-card height="100%" outline flat tile>
                        <div class="role-bottom" v-bind:class="[role.role]" style="height:100%;width:100%;border-top:2px solid black;border-right:0px solid black;display: flex;justify-content: center; align-items: center;">
                            <img :src='require("../../assets/" + role.role + ".png")' max-width=80%/>
                        </div>
                    </v-card>
                </v-col>  
                <v-col cols="10">
                    <v-card outline flat tile>
                        <div class="role-top" style="display:block">
                            <h3 style="display:inline">{{roleName}}</h3>
                            </div>
                        <div class="role-bottom" style="text-align:center;display:block"><i>{{role.summary}}</i></div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="12">
                    <v-card outline flat tile>
                        <div class="role-bottom" style="display:block">
                            <b>HP:</b> {{role.hp}} <br>
                            <b>Defenses:</b> {{role.def1}}, {{role.def2}}, {{role.def3}} <br>
                            <b>Initiative Mod:</b> {{role.init}} <br><br>                            
                            <h3 style="text-align:center;">{{roleName}} Abilities</h3> <br>   
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
                </v-col>
            </v-row>
    </div>
</template>


<script>
    import Vue from 'vue'
    import allRoles from '@/assets/database/roles.json'

    export default Vue.extend({
        name: 'role-card',
        props: {
            roleName: {
                type: String,
                required: true,
            },
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
        }
    
    })
</script>

<style scoped>
  *{    
    font-family: "Courier New";
    font-size: 18;
  }
  .role-top {
    background-color: grey;
    border: 2px solid black;
    font-family: "Courier New";
    font-size: 18px;
    padding: 10px;
    box-sizing: border-box;
    border-radius:0px!important;
  }
  .role-bottom {
    background-color: #f0f0f0;
    border: 2px solid black;
    border-top: 0px solid black;
    font-family: "Courier New";
    font-size: 14px;
    padding: 5px;
    box-sizing: border-box;
    text-align: left;
    border-radius:0px!important;
  }
  .wrapper {
    display: flex;
    text-align: center;
  }
  .DPS{
      background-color: lightyellow
  }
  .Tank{
      background-color: lightyellow
  }
  .Support{
      background-color: lightyellow
  }
</style>