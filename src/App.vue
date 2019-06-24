<template>
  <div id="app">
    <header>
      <a href="/">
        <img alt="logo du FCB" src="./assets/logoFCB.svg">
      </a>
    </header>
    <div id="nav" @click="kick">
      <router-link to="/">News</router-link>
      <footballer ref="footballer" /> ⚽️
      <footballer style="transform:scale(-1, 1)"/> 
      <router-link to="/infos">Infos</router-link>
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
    kick(){
      this.$refs.footballer.kick()
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
