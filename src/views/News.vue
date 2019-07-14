<template>
  <section class="news">
    <h1>News</h1>
    <article v-for="post in $parent.news" :key="post.id">
      <h1><router-link :to="'news/' + post.id">{{ post.title }}</router-link ></h1>
      <small>{{post.date}}</small>
      <div v-html="post.content" />
    </article>
  </section>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style lang="scss" scoped>
</style>

