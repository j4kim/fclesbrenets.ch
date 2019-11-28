<template>
    <div class="sponsor">
        {{ sponsor.name }}
    </div>
</template>

<script>
export default {
    props: ["sponsor"],
    computed:{
        media(){
            return this.$root.media.find(media => {
                return media.title.rendered === this.sponsor.mediaTitle
            })
        }
    }
}
</script>

<style lang="scss">
    .sponsor{
        background-color: white;
        padding: 1rem;
    }
</style>