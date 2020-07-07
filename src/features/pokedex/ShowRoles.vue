<template>
  <v-container>
    <v-row>
       <v-col cols="12" class="d-flex justify-center" v-for="rl in roleNames" :key="rl" style="width:100%" lg=4>
              <role-card :roleName='rl'/>     
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import Vue from 'vue'
  import RoleCard from './RoleCard'

  export default Vue.extend({
      name: 'show-roles',
      props: {
          roleNames: {
              type: Array,
              required: true,
          },
      },
      components:{
          RoleCard
      },    
  })
</script>
