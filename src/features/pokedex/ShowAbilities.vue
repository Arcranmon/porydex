<template>
  <div class="wrapper" style="width:100%">
      <div v-for="an in abilityNames" :key="an" style="width:100%">
        <ability-card :abilityName='an'/>
      </div>
  </div>
</template>

<script>
    import Vue from 'vue'
    import AbilityCard from './AbilityCard'

    export default Vue.extend({
        name: 'show-abilities',
        props: {
            abilityNames: {
                type: Array,
                required: true,
            },
        },    
        components: {
          AbilityCard
        }
    })
</script>