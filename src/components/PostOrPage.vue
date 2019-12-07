<template>
    <div>
        <router-link :to="{name:backTo}" class="back-link">
            Retour
        </router-link>
        <article v-if="postOrPage">
            <h1>{{ postOrPage.title.rendered }}</h1>
            <div v-html="postOrPage.content.rendered" />
        </article>
        <article v-else>
            La page est introuvable
        </article>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:['postOrPage', 'backTo']
}
</script>

<style lang="scss">
.back-link{
    margin: 10px 0;
    display: block;
    color:white;
    &:before{
        content:"⬅";
        margin-right:4px;
    }
}
</style>
