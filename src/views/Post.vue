<template>
    <post-or-page :post-or-page="post" back-to="posts">
        Billet publié le {{ getDate(post.date, 'LL') }} par {{post.author}}
    </post-or-page>
</template>

<script>
import PostOrPage from '@/components/PostOrPage'

export default {
    components:{ PostOrPage },
    computed:{
        post(){
            return this.$root.posts.find(post => {
                return post.id == this.$route.params.id
            }) || {} // to avoid errors in console when data is not fetched yet
        }
    }
}
</script>
