<template>
    <post-or-page :post-or-page="page" back-to="pages" />
</template>

<script>
import PostOrPage from '@/components/PostOrPage'

export default {
    components:{ PostOrPage },
    computed:{
        page(){
            return this.$root.pages.find(page => {
                return page.slug === this.$route.params.slug
            })
        }
    }
}
</script>
