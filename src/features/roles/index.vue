<template>  
    <div>  
         <br>
        <div style="text-align:center;font-size:50px;font-family:'Press Start 2P';color:black">ROLEDEX</div>
        <h1 style="text-align:center;font-family:'Press Start 2P';color:black">Choose a class of Role!</h1><br>
        <v-select 
                label="name"
                :options="roleTypes"
                v-model="roleRole"
                class="scroll"                
                style="width:95%;  margin-left: auto; margin-right: auto;">>
         </v-select>
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
