<template>
  <section class="news">
    <h1>News</h1>
    <article v-for="post in news" :key="post.id">
      <h1><router-link :to="'news/' + post.id">{{ post.title.rendered }}</router-link ></h1>
      <small>{{ getDate(post.date) }}</small>
      <div v-html="post.content.rendered" />
    </article>
  </section>
</template>

<script>
import dataLoader from './data-loader-mixin'

export default {
  name: 'news',
  mixins: [dataLoader]
}
</script>

<style lang="scss" scoped>
</style>

