<template>
    <post-or-page :post-or-page="post" back-to="news">
        Billet publié le {{post.date}} par {{post.author}}
    </post-or-page>
</template>

<script>
import PostOrPage from '@/components/PostOrPage'

export default {
    components:{ PostOrPage },
    computed:{
        post(){
            return this.$parent.news.find(post => {
                return post.id == this.$route.params.id
            }) || {} // to avoid errors in console when data is not fetched yet
        }
    }
}
</script>
