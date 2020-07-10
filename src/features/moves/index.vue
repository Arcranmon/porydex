<template>  
    <div>  
         <br>
        <div style="text-align:center;font-size:50px;font-family:'Press Start 2P';color:black">MOVEDEX</div>
        <h1 style="text-align:center;font-family:'Press Start 2P';color:black">Choose a Type!</h1><br>
        <v-select 
                label="Choose a Move Type"
                :items="allTypes"                
                hide-details
                v-model="moveType"
                class="scroll"     
                outlined        
                style="width:95%;  margin-left: auto; margin-right: auto;background:lightcyan">
         </v-select>
        <show-cards :names="movelist" job="Move" :showA='true' />  
    </div>
</template>

<script>
    import Vue from 'vue'
    import ShowCards from '@/components/cards/ShowCards'
    import allMoves from '@/assets/database/moves.json'

    export default Vue.extend({
    name: 'moves',
    components: {
        ShowCards
    },
    data() {
        return {
            allMoves,
            moveType: 'All',
            allTypes: ['All',
                       'Bug',
                       'Dark',
                       'Dragon',
                       'Electric',
                       'Fairy',
                       'Fighting',
                       'Fire',
                       'Flying',
                       'Ghost',
                       'Grass',
                       'Ground',
                       'Ice',
                       'Normal',
                       'Poison',
                       'Psychic',
                       'Rock',
                       'Steel',
                       'Water']
        }
    },
    computed: {
        movelist: function(){
            var mvlist = []
            for(const mv of this.allMoves){
                if(this.moveType == mv.type || this.moveType == 'All'){
                    mvlist.push(mv.name)
                }
            }
            return mvlist
        },
    }
    })

    
</script>
