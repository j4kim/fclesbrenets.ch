<template>
  <section class="pages">
    <h1>Informations générales</h1>
    <div class="articles grid">
      <!-- columns -->
      <div class="grid-col grid-col--1"></div>
      <div class="grid-col grid-col--2"></div>
      <!-- items -->
      <article class="grid-item" v-for="article in orderedPages" :key="article.id">
        <h1><router-link :to="'infos/' + article.slug">{{ article.title.rendered }}</router-link ></h1>
        <div v-html="article.content.rendered" />
      </article>
    </div>
  </section>
</template>

<script>
import { sortBy } from 'lodash'
import Colcade from 'colcade'

export default {
  name: 'pages',
  data: () => ({ colc: undefined }),
  computed:{
    orderedPages(){
      return sortBy(this.$root.pages, 'menu_order')
    }
  },
  mounted() {
    this.$router.options.updateTitle("Infos")
    this.initGrid()
  },
  updated() { this.initGrid() },
  methods: {
    initGrid() {
      if (this.colc) { this.colc.destroy() }
      this.colc = new Colcade( '.grid', {
        columns: '.grid-col',
        items: '.grid-item'
      });
    }
  }
}
</script>

<style lang="scss">
.grid {
  margin: 0 -10px;
}

.grid-col {
  float: left;
  width: 100%;
}

.grid:after {
  display: block;
  content: '';
  clear: both;
}

.grid-item {
  margin: 0 10px 20px;
}

/* 1 column, hide columns 2 */
.grid-col--2 { display: none }

/* 2 columns at medium size */
@media ( min-width: 800px ) {
  .grid-col { width: 50%; }
  .grid-col--2 { display: block; } /* show column 2 */
}
</style>

