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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    article{
      border:1px solid lightblue;
      padding:10px;
      h1{
        margin:0;
      }
    }
  }
</style>

