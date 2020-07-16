<template>
  <v-app id="app" style="background: lightblue;">
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,
  },
  watch: {
    $route(to, from) {
      document.title = to.meta.title || 'PoryDex';
    },
  },
};
</script>
