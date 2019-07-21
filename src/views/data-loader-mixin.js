
import axios from 'axios'

export default {
    data(){
        return {
            posts:[],
            pages:[]
        }
    },
    created(){
        if(this.$route.meta.side === 'left'){
            axios.get(process.env.VUE_APP_API + 'posts').then(result => {
                this.posts = result.data
            })
        } else {
            axios.get(process.env.VUE_APP_API + 'pages').then(result => {
                this.pages = result.data
            })
        }
    }
}