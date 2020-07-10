<template>  
    <div>  
         <br>
        <div style="text-align:center;font-size:50px;font-family:'Press Start 2P';color:white;-webkit-text-stroke-width: 2px;-webkit-text-stroke-color: black;">ROLEDEX</div>
         <v-row align="center"> 
            <v-col cols="12">
                <v-select 
                        label="Role Type"
                        :items="roleTypes"                
                        hide-details
                        v-model="roleRole"
                        class="scroll"     
                        outlined        
                        style="margin-left: 5px; margin-right: 5px;background:lightcyan">
                </v-select>
            </v-col>
         </v-row>
        <show-cards :names="rolelist" job="Role" :showA='true' />  
    </div>
</template>

<script>
    import Vue from 'vue'
    import ShowCards from '@/components/cards/ShowCards'
    import allRoles from '@/assets/database/roles.json'

    export default Vue.extend({
    name: 'moves',
    components: {
        ShowCards
    },
    data() {
        return {
            allRoles,
            roleRole: 'All',
            roleTypes: ['All',
                       'DPS',
                       'Tank',
                       'Support']
        }
    },
    computed: {
        rolelist: function(){
            var rlist = []
            for(const rl of this.allRoles){
                if(this.roleRole == rl.role || this.roleRole == 'All'){
                    rlist.push(rl.name)
                }
            }
            return rlist
        },
    }
    })

    
</script>
