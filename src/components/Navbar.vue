<template>
  <div class="nav--wrapper">
    <router-link to="/"
      ><span class="pory--start">Pory</span
      ><span class="pory--end">Dex</span></router-link
    >
    <about class="about" />
  </div>
</template>

<script>
import About from './About';
export default {
  name: 'navbar',
  data() {
    return {
      popupActive: false,
    };
  },
  components: {
    About,
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none !important;
}
.nav--wrapper {
  background-color: darkslategrey;
  font-family: $font--gaming;
  padding: $space--xs;
  display: flex;
  align-items: center;
}
.pory--start {
  color: $color--pory;
  font-size: 2em;
}
.pory--end {
  color: $color--dex;
  font-size: 2em;
}
.about {
  margin-left: auto;
}
</style>
