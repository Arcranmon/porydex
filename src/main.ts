import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import router from './router'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  components: { App},
  router,
  render: h => h(App)
}).$mount('#app')
