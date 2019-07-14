<template>
  <section class="infos">
    <h1>Infos</h1>
    <div class="articles">
      <article v-for="article in $parent.infos" :key="article.id">
        <h1><router-link :to="'infos/' + slug(article.title)">{{ article.title }}</router-link ></h1>
        <div v-html="article.content" />
      </article>
    </div>
  </section>
</template>

<script>
import slug from 'slug'

export default {
  name: 'infos',
  methods:{
    slug
  }
}
</script>

<style lang="scss">
  .articles{
    column-width: 300px;
    column-gap: 20px;
  }
</style>

