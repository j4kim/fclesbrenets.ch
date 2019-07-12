<template>
  <div id="app" :class="$route.name">
    <header>
      <a href="/">
        <img alt="logo du FCB" src="./assets/logoFCB.svg">
      </a>
    </header>
    <nav>
      <div @click="changePage('news')">
        <span class="nav-link nav-news">News</span>
        <footballer ref="footballer-infos"/>
      </div>
      <ball class="ball"/>
      <div @click="changePage('infos')">
        <footballer ref="footballer-news" :revert="true"/> 
        <span class="nav-link nav-infos">Infos</span>      
      </div>
    </nav>
    <main>  
      <router-view/>  
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import Footballer from '@/components/Footballer.vue'
import Ball from '@/components/Ball.vue'

export default {
  components: {Footballer, Ball},
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
    changePage(name){
      if(name !== this.$route.name){
        this.$refs['footballer-'+name].kick()
        this.$router.replace({name})
      }
    }
  }
}
</script>

<style lang="scss">
$font-color:#2c3e50;
$accent-color:lighten(saturate($font-color, 60%),20%);

* { box-sizing: border-box; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
}
h2{
  margin:0;
}
header{
  text-align: center;
  img{
    height: 160px;
  }
}
nav {
  padding: 30px;
  width: 400px;
  margin: 0 auto;
  display: flex;  
  justify-content: space-between;
  align-items: baseline;

  .ball{
    flex: 1;
  }
}

.nav-link{
  color: #bbb;
  transition: all 1s;
  padding: 0 10px;
  font-size:1.2em;
  cursor:pointer;
  user-select: none;
  display: inline-block;
  width: 70px;
}

.news .nav-news,
.infos .nav-infos{
  color: black;
}

main{
  border-top: 1px solid $font-color;
  @media screen and (min-width: 800px) {
    width: 800px;
    margin: auto;
  }

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
