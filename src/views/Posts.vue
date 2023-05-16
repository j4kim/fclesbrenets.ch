<template>
    <section class="posts">
        <h1>L'actualité du club</h1>
        <article-wrapper
            v-for="post in $root.posts"
            :key="post.id"
            :content="post.content.rendered"
            :title="post.title.rendered"
            :link="'news/' + post.id"
            :date="getDate(post.date)"
        />
        <a
            class="load-more-btn"
            v-if="$root.hasMore['posts']"
            @click="loadPage"
        >
            Charger plus
        </a>
    </section>
</template>

<script>
import ArticleWrapper from "@/components/ArticleWrapper.vue";

export default {
    name: "posts",
    components: { ArticleWrapper },
    methods: {
        loadPage() {
            this.$root.fetchPage("posts");
        },
    },
    mounted() {
        this.$router.options.updateTitle("Actu");
    },
};
</script>

<style lang="scss" scoped>
.load-more-btn {
    padding: 10px;
    background-color: #057ec4;
    border: none;
    color: white;
    font-size: 1.2em;
    display: block;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: #057ec4;
        background-color: white;
    }
}
</style>
