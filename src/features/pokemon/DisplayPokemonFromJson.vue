<template>
    <div style="padding:15px">
            <v-row flex fluid fill-height no-gutters>             
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;outline: 2px solid darkslategrey;" lg="3">
                        <div style="text-align: center;">
                            <div class="pokemon-cell"><h2 style="display:inline"> {{stats.nickname}}, Level {{stats.level}} {{pokemon.name}} </h2> </div>
                            <img :src='require("../../assets/pokemon/" + pokemon.dexnumber + ".png")' style="max-width:60%; width: auto; height: auto;"/>
                        </div>
                </v-col> 
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;" lg="2" >
                        <div class='pokemon-cell'><h2 style="text-align:center;"> Basic Statistics </h2></div>
                        <v-row no-gutters style="padding:10px">  
                            <v-col cols="6" >         
                                <b>Type:</b>  <br>
                                <b>Size:</b> <br>
                                <b>Home Turf:</b> <br>
                                <b>Gifts:</b> <br>    
                            </v-col>
                            <v-col cols="6" style="text-align: center">    
                                <span class="Type" :class="pokemon.type1">{{pokemon.type1}}</span>
                                <span v-if="pokemon.type2" class="Type" :class="pokemon.type2">{{pokemon.type2}}</span>
                                {{pokemon.size}} <br>
                                <div v-for="i in turflist" :key="i">{{i}}<span v-if="i != turflist[turflist.length-1]">, </span></div>
                                <div v-for="i in giftlist" :key="i">{{i}}<span v-if="i != giftlist[giftlist.length-1]">, </span></div> 
                            </v-col> 
                        </v-row>
                </v-col>                 
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;" lg="2" >
                        <div class='pokemon-cell'><h2 style="text-align:center;"> Combat Statistics </h2></div>   
                            <v-row no-gutters style="padding:10px">  
                                <v-col cols="6" >             
                                    <b>HP:</b> <br>
                                    <b>Initiative:</b>  <br>
                                    <b>Movement:</b>  <br>
                                    <b>Evasion:</b>  <br>
                                    <b>Resolve:</b>  <br>
                                    <b>Vigor:</b>  <br>
                                    <b>Melee Damage:</b>  <br>
                                    <b>Ranged Damage:</b>  <br>
                                    <b>Physical Armor:</b>  <br>
                                    <b>Special Armor:</b>  <br>
                                </v-col>
                                <v-col cols="6" style="text-align: center">     
                                    {{maxhp}}   <br>
                                    {{init}}   <br>
                                    {{pokemon.movement}} <span v-if="(pokemon.movementtypes)">{{pokemon.movementtypes}}</span> <br>
                                    {{evasion}}  <br>
                                    {{resolve}}<br>
                                    {{vigor}}<br>
                                    {{meleedamage}}<br>
                                    {{rangeddamage}}<br>
                                    {{physarmor}}<br>
                                    {{specarmor}}<br>
                                </v-col>
                            </v-row>       
                </v-col>                                                        
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;" lg="2" > 
                    <div class='pokemon-cell'><h2 style="text-align:center"> Skills </h2></div>
                    <v-row no-gutters style="padding:10px">  
                        <v-col cols="6" >             
                            <h3> Action Skills </h3>
                            <span v-bind:class="{'goodskill': isGoodSkill('Force'), 'badskill': isBadSkill('Force')}"><b>Force:</b></span>  <br>
                            <span v-bind:class="{'goodskill': isGoodSkill('Traversal'), 'badskill': isBadSkill('Traversal')}"><b>Traversal:</b></span>  <br>
                            <span v-bind:class="{'goodskill': isGoodSkill('Survival'), 'badskill': isBadSkill('Survival')}"><b>Survival:</b></span> <br>
                            <h3 > Clever Skills </h3>
                            <span v-bind:class="{'goodskill': isGoodSkill('Finesse'), 'badskill': isBadSkill('Finesse')}"><b>Finesse:</b> </span>  <br>
                            <span v-bind:class="{'goodskill': isGoodSkill('Focus'), 'badskill': isBadSkill('Focus')}"><b>Focus:</b></span>  <br>
                            <span v-bind:class="{'goodskill': isGoodSkill('Covertness'), 'badskill': isBadSkill('Covertness')}"><b>Covertness:</b> </span> <br>
                            <h3 > Social Skills </h3>
                            <span v-bind:class="{'goodskill': isGoodSkill('Presence'), 'badskill': isBadSkill('Presence')}"><b>Presence:</b> </span> <br>
                            <span v-bind:class="{'goodskill': isGoodSkill('Insight'), 'badskill': isBadSkill('Insight')}"><b>Insight:</b> </span> <br>
                            <span v-bind:class="{'goodskill': isGoodSkill('Sway'), 'badskill': isBadSkill('Sway')}"><b>Sway:</b> </span>  <br>
                        </v-col>
                        <v-col cols="6" style="text-align: center">   
                            <div v-for="(skill, index) in stats.skills" :key="skill">
                                <span v-if="index % 3 == 0"><h3><br></h3></span>
                                <span v-if="Number(skill) >= 0">+</span>{{skill}}           <br>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>                     
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;" lg="3" >
                    <div style="text-align: left;height=100%" >                        
                        <div class='pokemon-cell'><h2 style="text-align:center;">  Traits </h2></div>
                        <div v-for="trait in traitlist" :key="trait" style="padding:10px">
                            <b>{{trait}}:</b>
                        </div>
                    </div>                    
                </v-col>                         
            </v-row>
            
            <v-row flex fluid fill-height no-gutters>                                                      
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;" lg="6" >                
                        <div class='pokemon-cell'><h2 style="text-align:center"> Ability </h2></div>
                        <show-cards :names='[stats.ability]' job="Ability"/>
                </v-col>                                                     
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;" lg="6" >                
                        <div class='pokemon-cell'><h2 style="text-align:center"> Role </h2></div>
                        <show-cards :names='[stats.role]' job="Role"/>
                </v-col>
            </v-row>
            <v-row flex fluid fill-height no-gutters>                                                   
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;" lg="12" >                
                        <div class='pokemon-cell'><h2 style="text-align:center"> Moves </h2></div>
                </v-col>                                                   
                <v-col cols="12" class="flex flex-column pokemon-cell-bottom" style="flex-direction:column;" lg="12" >  
                        <show-cards :names='stats.moves' job="Move"/>
                </v-col>     
            </v-row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import allPokemon from '@/assets/database/pokemon.json'
    import allRoles from '@/assets/database/roles.json'
    import ShowCards from '@/components/cards/ShowCards'

    export default Vue.extend({
        props: {
            stats: {
                type: Array,
                required: true,
            }
        },
        methods : {
            isGoodSkill: function(skillName) {
                if(skillName == this.pokemon.skill1 || skillName == this.pokemon.skill2){
                    return true
                }
                return false                    
            },
            isBadSkill: function(skillName) {
                if(skillName == this.pokemon.badskill ){
                    return true
                }
                return false                    
            },
        },
        computed: {
            pokemon: function () {            
                for(const pk of this.allPokemon){
                    if(this.stats.pokemon == pk.name ){
                        return pk
                    }
                }
            },
            role: function() {                        
                for(const pk of this.allRoles){
                    if(this.stats.role == pk.name ){
                        return pk
                    }
                }
            },
            init: function() {
                return Number(this.pokemon.initiative) + Number(this.role.init)
            },  
            maxhp: function() {
                if(this.role.hp == "Low") {
                    return Number(35) + Number(3*Math.floor(this.stats.level/2))
                }
                if(this.role.hp == "Medium") {
                    return Number(40) + Number(4*Math.floor(this.stats.level/2))
                }
                if(this.role.hp == "High") {
                    return Number(45) + Number(5*Math.floor(this.stats.level/2))
                }
            },    
            turflist: function() {
               if('turf2' in this.pokemon){
                   return [this.pokemon.turf1, this.pokemon.turf2]
               } 
               else{
                   return [this.pokemon.turf1]
               }
            },      
            traitlist: function() {
               if('trait2' in this.pokemon){
                   return [this.pokemon.trait1, this.pokemon.trait2]
               } 
               else{
                   return [this.pokemon.trait2]
               }
            },            
            giftlist: function() {
               if('gift2' in this.pokemon){
                   return [this.pokemon.gift1, this.pokemon.gift2]
               } 
               else{
                   return [this.pokemon.gift1]
               }
            },            
            attacklist: function() {
               if('basicattack2' in this.pokemon){
                   return [this.pokemon.basicattack1, this.pokemon.basicattack2]
               } 
               else{
                   return [this.pokemon.basicattack1]
               }
            },
            defenses: function() {
                return [this.role.def1, this.role.def2, this.role.def3]
            },
            evasion: function() {
                if(this.pokemon.def1 == "Evasion"){
                    return this.defenses[0]
                }
                if(this.pokemon.def2 == "Evasion"){
                    return this.defenses[1]
                }
                return this.defenses[2]
            },
            vigor: function() {
                if(this.pokemon.def1 == "Vigor"){
                    return this.defenses[0]
                }
                if(this.pokemon.def2 == "Vigor"){
                    return this.defenses[1]
                }
                return this.defenses[2]
            },
            resolve: function() {
                if(this.pokemon.def1 == "Resolve"){
                    return this.defenses[0]
                }
                if(this.pokemon.def2 == "Resolve"){
                    return this.defenses[1]
                }
                return this.defenses[2]
            },
            rangeddamage: function() {
                var list = Object.values(this.role)
                if(list.includes('Ranged Attacker')){
                    return '1d8'
                }
                if(list.includes('Versatile Attacker')){
                    return '1d8'
                }
                return '1d6'
            },
            meleedamage: function() {
                var list = Object.values(this.role)
                if(list.includes('Melee Attacker')){
                    return '1d10'
                }
                if(list.includes('Versatile Attacker')){
                    return '1d8'
                }
                return '1d6'
            },
            physarmor: function(){
                return 0
            },
            specarmor: function(){
                return 0
            }

        },
        data() {
            return{
                allPokemon,
                allRoles,
            }
        },
        components: {
            ShowCards
        }
    })

    
</script>


<style scoped>
    .pokemon-cell {
        background-color: darkcyan;
        font-family:  "Courier New";
        border-bottom: 2px solid darkslategrey;
        font-size: 18px;
        padding: 5px;
        box-sizing: border-box;
    }
    .pokemon-cell-bottom {
        color: black;
        background-color: rgb(136, 212, 212);
        outline: 2px solid darkslategrey;
        font-family:  "Courier New";
        font-size: 14px;
        padding: 5px;
        box-sizing: border-box;
    }
    .goodskill{
        color: darkgreen
    }    
    .badskill{
        color: darkred
    }
    .wrapper {
        display: flex;
    }
</style>