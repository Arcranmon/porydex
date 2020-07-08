<template>
  <v-container>
    <v-row>
       <v-col cols="12" class="d-flex justify-center" v-for="n in names" :key="n" style="width:100%" :lg="colWidth">
          <span v-if="job=='Move'"> <move-card :moveName='n' /></span>
          <span v-if="job=='Ability'"> <ability-card :abilityName='n' /></span>
          <span v-if="job=='Role'"> <role-card :roleName='n' /></span>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import Vue from 'vue'
  import MoveCard from './MoveCard'
  import AbilityCard from './AbilityCard'
  import RoleCard from './RoleCard'

  export default Vue.extend({
      name: 'show-cards',
      props: {
          names: {
              type: Array,
              required: true,
          },
          job: {
              type: String,
              required: true,
          },
      },
      components:{
          MoveCard,
          AbilityCard,
          RoleCard
      }, 
      computed:{
        colWidth: function(){
          return Math.max(12/this.names.length, 4)
        }
      }   
  })
</script>