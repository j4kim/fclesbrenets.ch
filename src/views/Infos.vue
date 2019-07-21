<template>
  <section class="infos">
    <h1>Infos</h1>
    <div class="articles">
      <article v-for="article in infos" :key="article.id">
        <h1><router-link :to="'infos/' + article.slug">{{ article.title.rendered }}</router-link ></h1>
        <div v-html="article.content.rendered" />
      </article>
    </div>
  </section>
</template>

<script>
import dataLoader from './data-loader-mixin'

export default {
  name: 'infos',
  mixins: [dataLoader]
}
</script>

<style lang="scss">
  .articles{
    column-width: 300px;
    column-gap: 20px;
  }
</style>

