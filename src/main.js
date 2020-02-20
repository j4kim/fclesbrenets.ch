import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
import moment from 'moment'
moment.locale('fr-ch')

Vue.mixin({
    methods: {
        getDate: (ymd, format = 'L') => moment(ymd).format(format)
    }
})

new Vue({
    router,
    data: {
        posts: [],
        pages: [],
        users: [],
        media: [],
        defaultParams: {
            posts: { _fields: "author,content,date,id,excerpt,slug,sticky,title" },
            pages: { _fields: "author,content,date,id,excerpt,slug,sticky,title,menu_order" },
            users: { _fields: "name,id" },
            media: { _fields: "title,media_details,source_url", per_page: 100 }
        },
        hasMore: {
            posts: undefined,
            pages: undefined,
            users: undefined,
            media: undefined
        }
    },
    render: h => h(App),
    methods:{
        fetchPage(resource){
            var offset = this[resource].length
            var params =  Object.assign({ offset }, this.defaultParams[resource])
            var baseURL = process.env.VUE_APP_API
            return axios.get(resource, {baseURL, params}).then(result => {
                this[resource] = this[resource].concat(result.data)
                this.hasMore[resource] = result.headers["x-wp-total"] > this[resource].length
            })
        },
        fetchAll(resource){
            this.fetchPage(resource).then(() => {
                if(this.hasMore[resource]){
                    this.fetchAll(resource)
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