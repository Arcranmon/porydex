<template>    
    <div style="text-align: center;">
            <trainer-button><router-link to="/pokedex">Pokedex</router-link></trainer-button>      
            <trainer-button><router-link to="/abilities">Abilities</router-link></trainer-button>     
            <trainer-button><router-link to="/moves">Moves</router-link></trainer-button> 
            <trainer-button><router-link to="/roles">Roles</router-link></trainer-button>    
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



<style>
    .scroll {
        background-color: lightcyan;
        font-family: 'Lucida Console';
        border: black solid 2px
    }

    .scroll .vs__dropdown-menu {
        background-color: lightcyan;
    }
</style>