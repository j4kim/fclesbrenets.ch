import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import axios from 'axios'

import moment from 'moment'
moment.locale('fr-ch')
Vue.mixin({
    methods: {
        getDate: (ymd, format = 'L') => moment(ymd).format(format)
    }
})

Vue.config.productionTip = false

var data = {
    posts: [],
    pages: []
}

router.beforeEach((to, from, next) => {
    var source = to.meta.side === 'left' ? 'posts' : 'pages'
    if(data[source].length === 0){
        axios.get(process.env.VUE_APP_API + source).then(result => {
            data[source] = result.data
        })
    }
    next()
})

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')