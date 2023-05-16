<template>
    <div class="article-wrapper">
        <article>
            <h2>
                <router-link :to="link">{{ title }}</router-link>
            </h2>
            <small v-if="date">{{ date }}</small>
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
    article {
        break-inside: avoid;
        padding: 1em;
        margin-bottom: 1em;
        transform: translateZ(0);
        background: white;

        h2 {
            margin: 0;
            line-height: 1.2;
        }

        p {
            margin: 0.6em 0;
            line-height: 1.6;
        }

        img {
            width: auto;
            height: auto;
            max-width: 100%;
        }
    }
}
</style>
