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
    article{
      break-inside: avoid;
      box-shadow: 0 3px 8px transparentize(black, 0.8);
      padding:10px;
      margin-bottom:20px;
      transform: translateZ(0);
      h1{
        margin:0 0 5px;
      }
    }
  }
</style>

