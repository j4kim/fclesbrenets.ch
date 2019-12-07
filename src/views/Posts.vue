<template>
  <section class="posts">
    <h1>News</h1>
    <article v-for="post in $root.posts" :key="post.id">
      <h1><router-link :to="'news/' + post.id">{{ post.title.rendered }}</router-link ></h1>
      <small>{{ getDate(post.date) }}</small>
      <div v-html="post.content.rendered" />
    </article>
    <a class="load-more-btn"
      v-if="$root.totalPages['posts'] >= nextPage"
      @click="loadPage">
      Charger plus
    </a>
  </section>
</template>

<script>
export default {
  name: 'posts',
  data(){
    return {
      nextPage: 2
    }
  },
  methods:{
    loadPage(){
      this.$root.fetchPage('posts', this.nextPage).then(() => {
        this.nextPage++
      })
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
    font-size: 16px;
    cursor: pointer;
    &:hover{
      color: #057ec4;
      background-color: white;
    }
  }
</style>

