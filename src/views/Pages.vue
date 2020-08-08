<template>
  <section class="pages">
    <h1>Informations générales</h1>
    <div class="articles">
      <article v-for="article in orderedPages" :key="article.id">
        <h1><router-link :to="'infos/' + article.slug">{{ article.title.rendered }}</router-link ></h1>
        <div v-html="article.content.rendered" />
      </article>
    </div>
  </section>
</template>

<script>
import { sortBy } from 'lodash'

export default {
  name: 'pages',
  computed:{
    orderedPages(){
      return sortBy(this.$root.pages, 'menu_order')
    }
  },
  mounted() {
    document.title = "FC Les Brenets | Infos"
  }
}
</script>

<style lang="scss">
  .articles{
    column-width: 300px;
    column-gap: 20px;
  }
</style>

