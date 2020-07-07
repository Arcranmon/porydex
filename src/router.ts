import Vue from 'vue'
import Router from 'vue-router'

import MainMenu from '@/features/main_menu/index.vue'
import Pokedex from '@/features/pokedex/index.vue'

Vue.use(Router)

const r = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'main-menu',
      meta:{
        title: 'Welcome!',
      },
      component: MainMenu,
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      meta:{
        title: 'Pokedex',
      },
      component: Pokedex,
    },
  ], 
})

export default r
