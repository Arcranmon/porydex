<template>    
    <div style="text-align: center;">
            <trainer-button><router-link to="/pokedex">Pokedex</router-link></trainer-button>    
            <trainer-button><router-link to="/moves">Moves</router-link></trainer-button>    
    </div>
</template>

<script>
    import Vue from 'vue'
    import TrainerButton from '@/components/TrainerButton.vue'


    export default Vue.extend({
    name: 'main-menu',
    components: {
        TrainerButton
    },
    })
</script>