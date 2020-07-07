import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'typeface-press-start-2p/index.css'

import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import router from './router'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import VueSimpleMarkdown  from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueSimpleMarkdown);

new Vue({
  components: { App},
  router,
  render: h => h(App)
}).$mount('#app')
