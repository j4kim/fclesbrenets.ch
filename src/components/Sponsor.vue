<template>
    <div  class="sponsor" :class="sponsor.classes">
        <img v-if="media" :src="mediaSrc" />
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
        },
        mediaSrc(){
            var sizes = this.media.media_details.sizes
            return (sizes.medium || sizes.full).source_url
        }
    }
}
</script>

<style lang="scss">
    .sponsor{
        background-color: white;
        padding: 1rem;
        img{
            max-width: 100%;
        }
        &.inverted{
            background-color: #2c3e50;
            color: white;
        }
    }
</style>