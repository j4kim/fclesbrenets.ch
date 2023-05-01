<template>
    <div>
        <a @click="back" class="back-link">
            Retour
        </a>
        <article v-if="postOrPage">
            <h1>{{ postOrPage.title.rendered }}</h1>
            <article-content :html="postOrPage.content.rendered" />
        </article>
        <article v-else-if="loading">
            Chargement...
        </article>
        <article v-else>
            La page est introuvable
        </article>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:['postOrPage', 'backTo', 'loading'],
    mounted(){
        var offset = document.querySelector("main").offsetTop
        setTimeout(() => document.documentElement.scrollTop = offset, 0)
        if (this.postOrPage) {
            this.updateTitle()
        }
    },
    methods: {
        back(){
            // if there is a previous page, just go back
            // otherwise (user just popped on the page) we use backTo prop
            if (this.$route.meta.previous.name) {
                this.$router.back()
            } else {
                this.$router.push({name:this.backTo})
            }
        },
        updateTitle(){
            this.$router.options.updateTitle(this.postOrPage.title.rendered)
        }
    },
    watch: {
        postOrPage (newValue) {
            this.updateTitle()
        }
    }
}
</script>

<style lang="scss">
.back-link{
    margin: 10px 0;
    display: block;
    color:white;
    cursor: pointer;
    &:before{
        content:"⬅";
        margin-right:4px;
    }
}
</style>
