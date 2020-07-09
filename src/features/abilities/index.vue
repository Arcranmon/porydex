<template>  
    <div>  
         <br>
        <div style="text-align:center;font-size:50px;font-family:'Press Start 2P';color:black">ABILITYDEX</div>
        <show-cards :names="abilitylist" job="Ability" />  
    </div>
</template>

<script>
    import Vue from 'vue'
    import ShowCards from '@/components/cards/ShowCards'
    import allAbilities from '@/assets/database/abilities.json'

    export default Vue.extend({
    name: 'moves',
    components: {
        ShowCards
    },
    data() {
        return {
            allAbilities
        }
    },
    computed: {
        abilitylist: function(){
            var alist = []
            for(const abl of this.allAbilities){
                alist.push(abl.name)
            }
            return alist
        },
    }
    })

    
</script>
