<template>
    <div class="post-or-page">
        <a @click="back" class="back-link">
            Retour
        </a>
        <h1>{{ postOrPage.title.rendered }}</h1>
        <article-wrapper
            v-if="postOrPage"
            :content="postOrPage.content.rendered"
        >
        </article-wrapper>
        <article-wrapper v-else-if="loading" content="Chargement..." />
        <article-wrapper v-else content="La page est introuvable" />
        <slot></slot>
    </div>
</template>

<script>
import ArticleWrapper from "./ArticleWrapper.vue";

export default {
    components: { ArticleWrapper },
    props: ["postOrPage", "backTo", "loading"],
    mounted() {
        var offset = document.querySelector("main").offsetTop;
        setTimeout(() => (document.documentElement.scrollTop = offset), 0);
        if (this.postOrPage) {
            this.updateTitle();
        }
    },
    methods: {
        back() {
            // if there is a previous page, just go back
            // otherwise (user just popped on the page) we use backTo prop
            if (this.$route.meta.previous.name) {
                this.$router.back();
            } else {
                this.$router.push({ name: this.backTo });
            }
        },
        updateTitle() {
            this.$router.options.updateTitle(this.postOrPage.title.rendered);
        },
    },
    watch: {
        postOrPage(newValue) {
            this.updateTitle();
        },
    },
};
</script>

<style lang="scss">
.article-wrapper {
    margin-bottom: 1em;
}

.back-link {
    margin: 10px 0;
    display: block;
    color: white;
    cursor: pointer;

    &:before {
        content: "⬅";
        margin-right: 4px;
    }
}
</style>
