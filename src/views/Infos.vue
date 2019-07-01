<template>
  <div class="infos">
    <h1>Infos</h1>
    <div>
      <div v-for="article in $parent.data.infos" :key="article.id">
        <h2>{{ article.title }}</h2>
        <div v-html="article.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infos'
}
</script>
