
import axios from 'axios'

export default {
    data(){
        return {
            news:[],
            infos:[]
        }
    },
    created(){
        if(this.$route.meta.side === 'left'){
            axios.get(process.env.VUE_APP_API + 'posts').then(result => {
                this.news = result.data
            })
        } else {
            axios.get(process.env.VUE_APP_API + 'pages').then(result => {
                this.infos = result.data
            })
        }
    }
}