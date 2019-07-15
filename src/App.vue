<template>
  <div id="app" :class="$route.name + ' ball-' + $route.meta.side">
    <header>
      <a href="/">
        <img alt="logo du FCB" src="./assets/logoFCB.svg">
      </a>
    </header>
    <football-nav/>
    <main>  
      <router-view/>  
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import FootballNav from '@/components/FootballNav.vue'

export default {
  components: { FootballNav },
  data(){
    return {
      news:[],
      infos:[]
    }
  },
  created(){
    axios.get('/data.json').then(result => {
      this.news = result.data.news
      this.infos = result.data.infos
    })
  }
}
</script>

<style lang="scss">
$font-color:#2c3e50;
$accent-color:lighten(saturate($font-color, 60%),20%);

* { box-sizing: border-box; }
a{
  color:$accent-color;
  text-decoration: none;
}
body,html{
  margin:0;
  padding:0;
  background:floralwhite;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
  background-image: url(/bg.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}
#app{
  min-width: 280px;
}
header{
  text-align: center;
  img{
    height: 120px;
  }
}

main{
  border-top: 1px solid $font-color;
  padding: 10px;
  width:100%; 
  max-width: 800px;
  margin: auto;

  article{
    break-inside: avoid;
    box-shadow: 0 3px 8px transparentize(black, 0.95);
    padding:10px;
    margin-bottom:20px;
    transform: translateZ(0);
    background: white;
    h1{
      margin:0 0 5px;
    }
  }
}
</style>
