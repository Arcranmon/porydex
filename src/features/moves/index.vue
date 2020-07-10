<template>  
    <div>  
         <br>
        <div style="text-align:center;font-size:50px;font-family:'Press Start 2P';color:white;-webkit-text-stroke-width: 2px;-webkit-text-stroke-color: black;">MOVEDEX</div>
        <v-row align="center"> 
            <v-col cols="12" lg="3">
                <v-select 
                        label="Move Type"
                        :items="allTypes"                
                        hide-details
                        v-model="moveType"
                        class="scroll"     
                        outlined        
                        style="margin-left: 5px; margin-right: 5px;background:lightcyan">
                </v-select>
            </v-col>
            <v-col cols="12" lg="3">
                <v-select 
                        label="Move Category"
                        :items="allCategories"                
                        hide-details
                        v-model="moveCategory"
                        class="scroll"     
                        outlined        
                        style="margin-left: 5px; margin-right: 5px;background:lightcyan">
                </v-select>
            </v-col>
            <v-col cols="12" lg="3">
                <v-select 
                        label="Move AP Cost"
                        :items="allAP"                
                        hide-details
                        v-model="moveAP"
                        class="scroll"     
                        outlined        
                        style="margin-left: 5px; margin-right: 5px;background:lightcyan">
                </v-select>
            </v-col>
            <v-col cols="12" lg="3">
                <v-select 
                        label="Defense"
                        :items="allDefense"                
                        hide-details
                        v-model="moveDefense"
                        class="scroll"     
                        outlined        
                        style="margin-left: 5px; margin-right: 5px;background:lightcyan">
                </v-select>
            </v-col>
        </v-row>    
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
                       'Water'],
            moveCategory: 'All',
            allCategories: ['All',
                            'Maneuver',
                            'Strike',
                            'Trick'],
            moveAP: 'All',
            allAP: ['All',
                    '1 AP',
                    '2 AP'],
            moveDefense: 'All',
            allDefense: ['All',
                        'Evasion',
                        'Resolve',
                        'Vigor']
        }
    },
    computed: {
        movelist: function(){
            var mvlist = []
            for(const mv of this.allMoves){
                if(
                    (this.moveType == mv.type || this.moveType == 'All') &&
                    (this.moveCategory == mv.category || this.moveCategory == 'All') &&
                    (this.moveAP == mv.action || this.moveAP == 'All') &&
                    (this.moveDefense == 'All' || (this.moveCategory != 'Manuever' && this.moveDefense == mv.defense ))) {
                    mvlist.push(mv.name)
                }
            }
            return mvlist
        },
    }
    })

    
</script>
