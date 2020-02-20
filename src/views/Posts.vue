<template>
  <section class="posts">
    <h1>L'actualité du club</h1>
    <article v-for="post in $root.posts" :key="post.id">
      <h1><router-link :to="'news/' + post.id">{{ post.title.rendered }}</router-link ></h1>
      <small>{{ getDate(post.date) }}</small>
      <div v-html="post.content.rendered" />
    </article>
    <a class="load-more-btn"
      v-if="$root.hasMore['posts']"
      @click="loadPage">
      Charger plus
    </a>
  </section>
</template>

<script>
export default {
  name: 'posts',
  methods:{
    loadPage(){
      this.$root.fetchPage('posts')
    }
  }
}
</script>

<style lang="scss" scoped>
  .load-more-btn{
    padding: 10px;
    background-color: #057ec4;
    border: none;
    color: white;
    font-size: 1.2em;
    display: block;
    text-align: center;
    cursor: pointer;
    &:hover{
      color: #057ec4;
      background-color: white;
    }
  }
</style>

