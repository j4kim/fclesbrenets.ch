<template>
    <post-or-page :post-or-page="page" back-to="pages" />
</template>

<script>
import dataLoader from './data-loader-mixin'
import PostOrPage from '@/components/PostOrPage'

export default {
    components:{ PostOrPage },
    mixins: [dataLoader],
    computed:{
        page(){
            return this.pages.find(page => {
                return page.slug === this.$route.params.slug
            }) || {} // to avoid errors in console when data is not fetched yet
        }
    }
}
</script>
