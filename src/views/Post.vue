<template>
    <post-or-page :post-or-page="post" back-to="posts">
        <div v-if="post">
            Billet publié le {{ getDate(post.date, 'LL') }} par {{ author.name }}
        </div>
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
            })
        },
        author(){
            return this.$root.users.find(u => u.id == this.post.author) || {}
        }
    }
}
</script>
