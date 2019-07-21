<template>
    <div>
        <router-link :to="{name:backTo}" class="back-link">
            Retour aux {{backTo}}
        </router-link>
        <article>
            <h1>{{ (postOrPage.title || {}).rendered }}</h1>
            <div v-html="(postOrPage.content || {}).rendered" />
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
    &:before{
        content:"⬅";
        margin-right:4px;
    }
}
</style>
