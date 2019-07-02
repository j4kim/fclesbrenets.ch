<template>
  <section class="news">
    <h1>News</h1>
    <article v-for="post in $parent.data.news" :key="post.id">
      <h1>{{post.title}}</h1>
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
  article{
    margin: 30px 0 20px;
  }
</style>

