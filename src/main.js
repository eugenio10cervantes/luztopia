import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'

import '@/assets/scss/style.scss'

Vue.use(VueGtag, {
  config: { id: 'UA-124842718-3' }
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
