<template>    
    <div style="text-align: center;">
            <trainer-button><router-link to="/pokedex" style="color:black">Pokedex</router-link></trainer-button>      
            <trainer-button><router-link to="/abilities" style="color:black">Abilities</router-link></trainer-button>     
            <trainer-button><router-link to="/moves" style="color:black">Moves</router-link></trainer-button> 
            <trainer-button><router-link to="/roles" style="color:black">Roles</router-link></trainer-button>    
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

