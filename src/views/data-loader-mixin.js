
import axios from 'axios'

export default {
    data(){
        return {
            posts:[],
            pages:[]
        }
    },
    created(){
        var source = this.$route.meta.side === 'left' ? 'posts' : 'pages'
        axios.get(process.env.VUE_APP_API + source).then(result => {
            this[source] = result.data
        })
    }
}
