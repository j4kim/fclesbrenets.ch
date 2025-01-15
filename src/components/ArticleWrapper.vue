<template>
    <div class="article-wrapper">
        <article :class="`size-${sizeClass}`">
            <header v-if="title || date">
                <h2>
                    <router-link v-if="link" :to="link">{{
                        title
                    }}</router-link>
                    <template v-else>{{ title }}</template>
                </h2>
                <small v-if="date">{{ date }}</small>
            </header>
            <article-content :html="content" />
        </article>
    </div>
</template>

<script>
export default {
    name: "article-wrapper",
    props: ["content", "title", "link", "date"],

    data: () => ({
        width: 0,
    }),

    mounted() {
        new ResizeObserver((entries) => {
            this.width = entries[0].contentRect.width;
        }).observe(this.$el);
    },

    computed: {
        sizeClass() {
            if (this.width < 420) {
                return "xs";
            } else if (this.width < 600) {
                return "s";
            } else if (this.width < 800) {
                return "m";
            } else {
                return "l";
            }
        },
    },
};
</script>

<style lang="scss">
.article-wrapper {
    article {
        break-inside: avoid;
        padding: 1em;
        transform: translateZ(0);
        background: white;

        header {
            padding-bottom: 0.4em;
        }

        h2 {
            margin: 0;
            line-height: 1.2;
        }

        --p-spacing: 0.6em;

        &.size-m {
            padding: 2em;
            font-size: 18px;

            --p-spacing: 1em;
        }

        &.size-l {
            padding: 2.8em;
            font-size: 20px;
        }

        .article-content {
            p {
                line-height: 1.6;
                margin-top: var(--p-spacing);
                margin-bottom: var(--p-spacing);
                &:first-child {
                    margin-top: 0;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }

            img {
                height: auto;
                max-width: 100%;
            }
        }
    }
}
</style>
