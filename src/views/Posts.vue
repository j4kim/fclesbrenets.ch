<template>
  <section class="posts">
    <h1>News</h1>
    <article v-for="post in $root.posts" :key="post.id">
      <h1><router-link :to="'news/' + post.id">{{ post.title.rendered }}</router-link ></h1>
      <small>{{ getDate(post.date) }}</small>
      <div v-html="post.content.rendered" />
    </article>
    <button
      v-if="$root.totalPages['posts'] > page"
      @click="loadPage">
      Charger plus
    </button>
  </section>
</template>

<script>
export default {
  name: 'posts',
  data(){
    return {
      page: 1
    }
  },
  methods:{
    loadPage(){
      this.page++
      this.$root.fetchPage('posts', this.page)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

