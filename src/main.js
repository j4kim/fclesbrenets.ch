import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import moment from 'moment'
import 'moment/locale/fr-ch' 
moment.locale('fr-ch')
Vue.mixin({
  methods: {
    getDate: (ymd, format='L') => moment(ymd).format(format)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
