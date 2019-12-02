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

function fetchResource(resource, params){
    // Warning: 10 rows per page by default
    // todo: pagination for posts and multiple requests for media
    var baseURL = process.env.VUE_APP_API
    axios.get(resource, {baseURL, params}).then(result => {
        data[resource] = result.data
    })
}

fetchResource('users')
fetchResource('posts')
fetchResource('pages')
fetchResource('media', {
    _fields: "title,media_details",
    per_page: 100
})

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')