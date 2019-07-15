<template>
    <div>
        <router-link to="/infos">Retour aux infos</router-link>
        <article>
            <h1>{{ page.title }}</h1>
            <div v-html="page.content" />
        </article>
    </div>
</template>

<script>
import slug from 'slug'

export default {
    computed:{
        page(){
            return this.$parent.infos.find(page => {
                return slug(page.title) === this.$route.params.slug
            }) || {} // to avoid errors in console when data is not fetched yet
        }
    }
}
</script>
