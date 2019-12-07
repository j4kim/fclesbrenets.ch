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

const DEFAULT_PARAMS = {
    posts: { _fields: "author,content,date,id,excerpt,slug,sticky,title" },
    pages: { _fields: "author,content,date,id,excerpt,slug,sticky,title,menu_order" },
    users: { _fields: "name,id" },
    media: { _fields: "title,media_details", per_page: 100 }
}

new Vue({
    router,
    data: { posts:[], pages:[], users:[], media:[] },
    render: h => h(App),
    methods:{
        fetchPage(resource, page = 1){
            var params =  Object.assign({ page }, DEFAULT_PARAMS[resource])
            var baseURL = process.env.VUE_APP_API
            return axios.get(resource, {baseURL, params}).then(result => {
                this[resource] = this[resource].concat(result.data)
                return result
            })
        },
        fetchAll(resource, pageToFetch = 1){
            this.fetchPage(resource, pageToFetch).then(result => {
                if(result.headers["x-wp-totalpages"] > pageToFetch){
                    this.fetchAll(resource, pageToFetch + 1)
                }
            })
        }
    },
    created(){
        this.fetchPage('users')
        this.fetchPage('posts')
        this.fetchPage('pages')
        this.fetchAll('media')
    }
}).$mount('#app')