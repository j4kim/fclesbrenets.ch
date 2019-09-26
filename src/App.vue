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
import FootballNav from '@/components/FootballNav.vue'

export default {
  components: { FootballNav }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,400i,700');

$font-color:#2c3e50;
$accent-color:#057ec4;

* { box-sizing: border-box; }
a{
  color:$accent-color;
  text-decoration: none;
}
body,html{
  margin:0;
  padding:0;
  background-color:#cce0f4;
  background:url('../public/bg.png') no-repeat center center fixed; ;
  background-size:cover;
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
}
#app{
  min-width: 280px;
}
header{
  text-align: center;
  img{
    height: 100px;
    margin: 10px;
  }
}

main{
  border-top: 1px solid $font-color;
  padding: 20px;
  width:100%; 
  max-width: 800px;
  margin: auto;
  /* IE compatibility */
  display: block;

  article{
    break-inside: avoid;
    box-shadow: 0 3px 8px transparentize(black, 0.95);
    padding:15px;
    margin-bottom:20px;
    transform: translateZ(0);
    background: white;
    h1{
      margin:0 0 5px;
    }
    img{
      max-width: 100%;
    }
  }
}
</style>
