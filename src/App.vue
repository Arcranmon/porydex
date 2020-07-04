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
      }
    } 
</script>

<style>
  * {
    margin: 0px;
    box-sizing: border-box;
  }
  body {
    background-color: darkred;
    color: white;
    font-family: "Quicksand", sans-serif;
  }
  header{
    margin: 0px;
    background-color: black;
    padding: 15px;
    font-family: "Impact";
    font-size: 30px;
  }
</style>