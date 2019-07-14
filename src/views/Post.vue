<template>
    <article>
        <h1>{{ post.title }}</h1>
        <div v-html="post.content" />
    </article>
</template>

<script>
import slug from 'slug'

export default {
    computed:{
        post(){
            return this.$parent.news.find(post => {
                return post.id == this.$route.params.id
            }) || {} // to avoid errors in console when data is not fetched yet
        }
    }
}
</script>
