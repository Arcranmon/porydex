<template>
    <div> 
        <div style="width:100%; text-align:center;">
        <div style="text-align:center;font-size:50px;font-family:'Press Start 2P';color:white;-webkit-text-stroke-width: 2px;-webkit-text-stroke-color: black;">POKEDEX</div>
            <v-row align="center"> 
            <v-col cols="12" lg="4">
                <v-select 
                        label="Filter By Type"
                        :items="allTypes"                
                        hide-details
                        v-model="type"
                        class="scroll"     
                        outlined  
                        clearable          
                        style="margin-left: 5px; margin-right: 5px;background:lightcyan">
                </v-select>
            </v-col>
            <v-col cols="12" lg="4">
                <v-select 
                        label="Filter By Role"
                        :items="allRoles"  
                        item-text="name"  
                        item-value="name"             
                        hide-details
                        v-model="role"
                        class="scroll"     
                        outlined 
                        clearable       
                        style="margin-left: 5px; margin-right: 5px;background:lightcyan">
                </v-select>
            </v-col>
            <v-col cols="12" lg="4">
                <v-select 
                        label="Filter By Home Turf"
                        :items="allTurf"                
                        hide-details
                        v-model="turf"
                        class="scroll"     
                        outlined  
                        clearable          
                        style="margin-left: 5px; margin-right: 5px;background:lightcyan">
                </v-select>
            </v-col>
        </v-row> 
        <v-row align="center">  
            <v-col cols="12">
                <v-select 
                    label="Choose a Pokemon (Or Type Their Name)!"
                    :items="filtermon"
                    hide-details
                    item-text="name"  
                    v-model="selectedPokemon"      
                    outlined        
                    return-object
                    style="margin-left: 5px; margin-right: 5px; background:lightcyan">>
                </v-select>
            </v-col>
        </v-row>
        </div>    
        <div style="width:100%; float:right">
            <pokemon-stat-display :pokemon="selectedPokemon" />
        </div>            
    </div>
</template>


<script>
    import Vue from 'vue'
    import allPokemon from '@/assets/database/pokemon.json'
    import allRoles from '@/assets/database/roles.json'
    import PokemonStatDisplay from './PokemonStatDisplay'

    export default Vue.extend({
    components: {
        PokemonStatDisplay,
    },
    data(){
        return {
            allPokemon,
            selectedPokemon:'',            
            type: undefined,
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
                       'Water'],
            role: undefined, 
            allRoles,
            turf: undefined,
            allTurf: ['Caves',
                          'Desert',
                          'Forest',
                          'Grassland',  
                          'Mountain',          
                          'Open Water',
                          'Tundra',
                          'Urban',
                          'Wetlands']
        }
    },
    computed: {        
        filtermon: function(){
            var pklist = []
            for(const pk of this.allPokemon){
                if((this.type == undefined || this.type == pk.type1 || ('type2' in pk && this.type == pk.type2)) &&
                    (this.role == undefined || this.role == pk.role1 || this.role == pk.role2 || this.role == pk.role3) &&
                    (this.turf == undefined ||('turf1' in pk && this.turf == pk.turf1) || ('turf2' in pk && this.turf == pk.turf2))) {
                    pklist.push(pk)
                }
            }
            return pklist
        },
    }
    })
</script>