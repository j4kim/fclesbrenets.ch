<template>
    <div class="sponsor" :class="sponsor.classes">
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
    computed: {
        media() {
            return this.$root.media.find((media) => {
                return media.title.rendered === this.sponsor.mediaTitle;
            });
        },
        mediaSrc() {
            var sizes = this.media.media_details.sizes;
            return (sizes.medium || sizes.full || this.media).source_url;
        },
        contact() {
            return [
                this.sponsor.name,
                this.sponsor.address,
                this.sponsor.npa + " " + this.sponsor.city,
                this.sponsor.tel,
            ];
        },
    },
};
</script>

<style lang="scss">
.sponsor {
    &.double {
        grid-area: span 1 / span 2;
        font-size: 1.2em;

        div.media img {
            max-height: 100px;
        }
    }

    &.quad {
        grid-area: span 2 / span 2;
        font-size: 1.3em;

        div.media img {
            max-height: 150px;
        }
    }

    &.inverted {
        background-color: #2c3e50;
        color: white;
    }

    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;

    div.media {
        img {
            max-width: 100%;
            max-height: 80px;
        }
    }

    div.contact {
        font-size: 0.75em;

        &.no-media {
            font-size: 0.85em;
        }
    }
}
</style>
