<template>
  <div class="trn-btn" @click="$router.push(to)">
      <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        default: null
      }
    },
  }
</script>

<style scoped>
  a {
     text-decoration: none;
    color: black;
  }
  .trn-btn {
    display: inline-block;
    margin: 0.5em 0;
    background: white;
    border: 5px double black;
    border-radius: 10px;
    color: black!important;
    font-family: "Press Start 2P";
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    padding: 5px;
    min-width: 20%;
    width: auto;
    height: auto
  }

  .trn-btn:hover {
    background: #ffb5a5;
  }
</style>