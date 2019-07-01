<template>
  <div class="news">
    <h1>News</h1>
    <div class="post" v-for="post in $parent.data.news" :key="post.id">
      <h2>{{post.title}}</h2>
      <small>{{post.date}}</small>
      <div v-html="post.content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style lang="scss" scoped>
  .post{
    margin: 30px 0 20px;
  }
</style>

