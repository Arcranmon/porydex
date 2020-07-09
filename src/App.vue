<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <router-view />
  </div>
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
  * {
    margin: 0px;
    box-sizing: border-box;
  }
  body {
    background-color: lightblue;
    color: white;
    font-family: "Quicksand", sans-serif;
  }
  header{
    margin: 0px;
    background-color: darkslategray;
    padding: 15px;
    font-family: 'Press Start 2P';
    font-size: 30px;
  }
</style>