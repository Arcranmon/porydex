<template>
  <div>
    <a v-if="href" :href="href" class="trn-btn">
      <slot/>
    </a>
    <button v-else class="trn-btn">
      <slot/>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        default: null
      },
      to: {
        type: String,
        default: null
      }
    },
    computed: {
      type() {
        if (this.href) {
          return 'a'
        } else {
          return 'button'
        }
      }
    }
  }
</script>

<style scoped>
  a {
    color: inherit;
     text-decoration: none;
  }
  .trn-btn {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 6em;
    background: #7bc6ff;
    border: 2px solid white;
    border-radius: 3px;
    color: black;
    font-family: "Press Start 2P";
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .trn-btn:hover {
    background: #ffb5a5;
  }
</style>