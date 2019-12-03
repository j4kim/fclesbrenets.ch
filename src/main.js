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

const DEFAULT_PARAMS = {
    posts: { _fields: "author,content,date,id,excerpt,slug,sticky,title" },
    pages: { _fields: "author,content,date,id,excerpt,slug,sticky,title,menu_order" },
    users: { _fields: "name,id" },
    media: { _fields: "title,media_details", per_page: 100 }
}

function fetchPage(resource, page = 1){
    var params =  Object.assign({ page }, DEFAULT_PARAMS[resource])
    var baseURL = process.env.VUE_APP_API
    axios.get(resource, {baseURL, params}).then(result => {
        data[resource] = result.data
    })
}

fetchPage('users')
fetchPage('posts')
fetchPage('pages')
fetchPage('media')

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')