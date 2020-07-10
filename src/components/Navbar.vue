<template>
    <div>
        <router-link to="/"><span style="color:#ffb5a5">Pory</span><span style="color:#7bc6ff">Dex</span></router-link>
        <div style="float:right">
            <about />
        </div>
        
    </div>

    
</template>

<script>

import About from './About'
export default {
    name: 'navbar',
    data() {
        return {
            popupActive:false
        }
    },
    components:{
        About
    }
}
</script>

<style scoped>
    a{
        text-decoration: none!important;
    }
    .background{
        background-color: lightgrey
    }
</style>