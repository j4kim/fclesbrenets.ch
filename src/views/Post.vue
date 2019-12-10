<template>
    <post-or-page :post-or-page="post" back-to="posts" :loading="loading">
        <div v-if="post">
            Billet publié le {{ getDate(post.date, 'LL') }} par {{ author.name }}
        </div>
    </post-or-page>
</template>

<script>
import axios from 'axios'
import PostOrPage from '@/components/PostOrPage'

export default {
    components:{ PostOrPage },
    data(){
        return {
            loading: true,
            post: undefined
        }
    },
    created(){
        var localPost = this.$root.posts.find(post => {
            return post.id == this.$route.params.id
        })
        if(localPost){
            this.post = localPost
        } else {
            var params =  this.$root.defaultParams["posts"]
            var baseURL = process.env.VUE_APP_API
            var url = "posts/" + this.$route.params.id
            return axios.get(url, {baseURL, params}).then(result => {
                this.post = result.data
            }).finally(()=>{
                this.loading = false
            })
        }
    },
    computed:{
        author(){
            return this.$root.users.find(u => u.id == this.post.author) || {}
        }
    }
}
</script>
