<template>
  <section class="infos">
    <h1>Infos</h1>
    <div class="articles">
      <article v-for="article in $parent.data.infos" :key="article.id">
        <h1>{{ article.title }}</h1>
        <div v-html="article.content" />
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

