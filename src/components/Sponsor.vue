<template>
    <div  class="sponsor" :class="sponsor.classes">
        <div v-if="media">
            <img :src="mediaSrc" />
        </div>
        <label>{{ sponsor.name }}</label>
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
        &.inverted{
            background-color: #2c3e50;
            color: white;
        }
        background-color: white;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div{
            flex-grow: 1;
            img{
                max-width: 100%;
            }
        }
        label{
            text-align: center;
        }
    }
</style>