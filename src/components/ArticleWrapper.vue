<template>
    <div class="article-wrapper">
        <article>
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
};
</script>

<style lang="scss">
.article-wrapper {
    container-type: inline-size;
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

        @container (min-width: 600px) {
            padding: 2em;
            font-size: 18px;

            --p-spacing: 1em;
        }

        @container (min-width: 800px) {
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
                width: auto;
                height: auto;
                max-width: 100%;
            }
        }
    }
}
</style>
