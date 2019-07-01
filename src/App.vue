<template>
  <div id="app" :class="$route.name">
    <header>
      <a href="/">
        <img alt="logo du FCB" src="./assets/logoFCB.svg">
      </a>
    </header>
    <div id="nav" @click="changePage">
      <span>News</span>
      <footballer ref="footballer-infos"/>
      <ball class="ball"/>
      <footballer ref="footballer-news" :revert="true"/> 
      <span>Infos</span>      
    </div>
    <div id="content">  
      <router-view/>  
    </div>
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
    changePage(){
      var name = this.$route.name === 'news' ? 'infos' : 'news'
      this.$refs['footballer-'+name].kick()
      this.$router.push({name})
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
  color: $font-color;
}
header{
  text-align: center;
  img{
    height: 160px;
  }
}
#nav {
  padding: 30px;
  width: 300px;
  margin: 0 auto;
  display: flex;  
  justify-content: space-between;
  align-items: baseline;
  .ball{
    flex: 1;
  }
}
#content{
  border-top: 1px solid $font-color;
  @media screen and (min-width: 800px) {
    width: 800px;
    margin: auto;
  }
}
</style>
