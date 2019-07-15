<template>
    <post-or-page :post-or-page="page" back-to="infos" />
</template>

<script>
import slug from 'slug'
import PostOrPage from '@/components/PostOrPage'

export default {
    components:{ PostOrPage },
    computed:{
        page(){
            return this.$parent.infos.find(page => {
                return slug(page.title) === this.$route.params.slug
            }) || {} // to avoid errors in console when data is not fetched yet
        }
    }
}
</script>
