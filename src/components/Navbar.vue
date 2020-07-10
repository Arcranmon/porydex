<template>
    <div>
        <router-link to="/"><span style="color:#ffb5a5;font-size:30px">Pory</span><span style="color:#7bc6ff;font-size:30px">Dex</span></router-link>
        <div style="float:right;margin:10px">
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
    *{
        background-color: darkslategrey;
        font-family: "Press Start 2P";
    }
</style>