<template>
  <div class="wrapper" style="width:100%">
      <div v-for="rl in roleNames" :key="rl" style="width:100%">
        <role-card :roleName='rl'/>
      </div>
  </div>
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
