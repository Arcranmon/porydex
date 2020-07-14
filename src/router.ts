import Vue from 'vue';
import Router from 'vue-router';

import MainMenu from '@/features/main_menu/index.vue';
import Pokedex from '@/features/pokedex/index.vue';
import Moves from '@/features/moves/index.vue';
import Abilities from '@/features/abilities/index.vue';
import Roles from '@/features/roles/index.vue';
import Pokemon from '@/features/pokemon/index.vue';

Vue.use(Router);

const r = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      component: MainMenu,
      name: 'main-menu',
      meta: {
        title: 'PoryDex',
      },
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex,
    },
    {
      path: '/moves',
      name: 'moves',
      component: Moves,
    },
    {
      path: '/abilities',
      name: 'abilities',
      component: Abilities,
    },
    {
      path: '/roles',
      name: 'roles',
      component: Roles,
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: Pokemon,
    },
  ],
});

export default r;
