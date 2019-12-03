<template>
    <div  class="sponsor" :class="sponsor.classes">
        <div class="media" v-if="media">
            <img :src="mediaSrc" />
        </div>
        <div class="contact" :class="media ? '' : 'no-media'">
            <div v-for="line in contact" :key="line">
                {{ line }}
            </div>
        </div>
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
        },
        contact(){
            return [
                this.sponsor.name,
                this.sponsor.address,
                this.sponsor.npa + " " + this.sponsor.city ,
                this.sponsor.tel
            ]
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
        justify-content: space-around;
        text-align: center;
        div.media{
            img{
                max-width: 100%;
                max-height: 100px;
            }
        }
        div.contact{
            font-size: 11px;
            &.no-media{
                font-size: 14px;
            }
        }
    }
</style>