<template>
  <section class="infos">
    <h1>Infos</h1>
    <div class="articles">
      <article v-for="article in $parent.infos" :key="article.id">
        <h1><router-link :to="'infos/' + article.slug">{{ article.title.rendered }}</router-link ></h1>
        <div v-html="article.content.rendered" />
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'infos'
}
</script>

<style lang="scss">
  .articles{
    column-width: 300px;
    column-gap: 20px;
  }
</style>

