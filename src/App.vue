<template>
  <v-app id="app" style="background:lightblue">
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar'

    export default {
      name: 'app',
      components: {
        Navbar
      },
      watch: {
      '$route' (to, from) {
        document.title = to.meta.title || 'PoryDex'
      }
    },
    } 
</script>

<style>
  .Type{
    border-radius: 3px;
    line-height: 18px;
    max-width: 110px;
    min-width: 110px;
    text-transform: none;
    text-align: center;
    width: 38.4375%;
    display: inline-block;
    margin: 0 1.5625% 0 0;
  }
  .Normal{
    background-color: #C6C6A7;
  }
  .Fire{
    background-color: #F5AC78;
  }
  .Water{
    background-color: #9DB7F5;
  }
  .Grass{
    background-color: #A7DB8D;
  }
  .Electric{
    background-color: #FAE078;
  }
  .Dark{
    background-color: #A29288;
  }
  .Fighting{
    background-color: #D67873;
  }
  .Psychic{
    background-color: #FA92B2;
  }
  .Poison{
    background-color: #C183C1;
  }
  .Fairy{
    background-color: #F4BDC9;
  }
  .Bug{
    background-color: #C6D16E;
  }
  .Ghost{
    background-color: #A292BC;
  }
  .Dragon{
    background-color: #A27DFA;
  }
  .Ice{
    background-color: #BCE6E6;
  }
  .Rock{
    background-color: #D1C17D;
  }
  .Ground{
    background-color: #E0C068;
  }
  .Steel{
    background-color: #D1D1E0;
  }
  .Flying{
    background-color: #C6B7F5;
  }  
</style>
