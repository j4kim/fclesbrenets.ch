<template>
    <post-or-page :post-or-page="page" back-to="infos" />
</template>

<script>
import PostOrPage from '@/components/PostOrPage'

export default {
    components:{ PostOrPage },
    computed:{
        page(){
            return this.$parent.infos.find(page => {
                return page.slug === this.$route.params.slug
            }) || {} // to avoid errors in console when data is not fetched yet
        }
    }
}
</script>
