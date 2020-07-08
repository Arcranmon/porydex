<template>  
    <div>  
         <br>
        <v-select 
                label="name"
                :options="allTypes"
                v-model="moveType"
                class="dex-scroll">
         </v-select>
        <show-cards :names="movelist" job="Move" />  
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
            moveType: 'Bug',
            allTypes: ['Bug',
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
                if(this.moveType == mv.type){
                    mvlist.push(mv.name)
                }
            }
            return mvlist
        },
    }
    })

    
</script>


<style>
    .dex-scroll {
        background-color: lightgrey;
    }

    .dex-scroll .vs__dropdown-menu {
        background-color: lightgrey;
    }
</style>