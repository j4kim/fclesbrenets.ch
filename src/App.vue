<template>
  <div id="app">
    <header>
      <a href="/">
        <img alt="logo du FCB" src="./assets/logoFCB.svg">
      </a>
    </header>
    <div id="nav">
      <a @click="goTo('news')">News</a>
      <footballer ref="footballerL"/> ⚽️
      <footballer ref="footballerR" :revert="true" colorShirt="#d33" colorShorts="black"/> 
      <a @click="goTo('infos')">Infos</a>
    </div>
    <div id="content">
      <router-view/>  
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Footballer from '@/components/Footballer.vue'

export default {
  components: {Footballer},
  data(){
    return {
      data:{}
    }
  },
  created(){
    axios.get('data.json').then(result => {
      this.data = result.data
    })
  },
  methods:{
    goTo(page){
      var side = page === 'infos' ? 'L' : 'R'
      this.$refs['footballer'+side].kick()
      this.$router.push({name:page})
    }
  }
}
</script>


<style lang="scss">
$font-color:#2c3e50;
$accent-color:lighten(saturate($font-color, 60%),20%);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color;
}
header{
  img{
    height: 160px;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $font-color;
    text-decoration: none;
    &.router-link-exact-active {
      color: $accent-color;
    }
  }
}
#content{
  border-top: 1px solid $font-color;
  text-align: left;
  @media screen and (min-width: 800px) {
    width: 800px;
    margin: auto;
  }
}
</style>
