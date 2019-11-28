import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

import moment from 'moment'
moment.locale('fr-ch')
Vue.mixin({
    methods: {
        getDate: (ymd, format = 'L') => moment(ymd).format(format)
    }
})

Vue.config.productionTip = false

var data = { posts:[], pages:[], users:[], media:[] }

function fetchIfNeeded(resource){
    if(data[resource].length === 0){
        axios.get(process.env.VUE_APP_API + resource).then(result => {
            data[resource] = result.data
        })
    }
}

fetchIfNeeded('users')
fetchIfNeeded('media')

router.beforeEach((to, from, next) => {
    fetchIfNeeded(to.meta.side === 'left' ? 'posts' : 'pages')
    next()
})

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')