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
    <div class="sponsors-container">
      <sponsors v-if="sponsors && $route.name !== 'sponsors'"/>
    </div>
  </div>
</template>

<script>
import FootballNav from '@/components/FootballNav.vue'
import Sponsors from '@/components/Sponsors.vue'

export default {
  components: { FootballNav, Sponsors },

  computed: {
    sponsors() {
      return process.env.VUE_APP_SPONSORS === 'true'
    }
  },
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
}

body{
  height:100vh;
  overflow:auto;
  background-color:#cce0f4;
  background:url('../public/bg.svg') no-repeat center center fixed; ;
  background-size:cover;
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
  font-size: 18px;
}

html{
  background:none
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
  border-bottom: 1px solid $font-color;
  padding: 20px;
  width:100%; 
  max-width: 800px;
  margin: auto;
  /* IE compatibility */
  display: block;

  article{
    break-inside: avoid;
    box-shadow: 0 3px 8px transparentize(black, 0.95);
    padding: 24px;
    margin-bottom: 40px;
    transform: translateZ(0);
    background: white;
    p {
      margin: 0 0 10px;
      line-height: 1.6;
    }
    h1{
      margin: 0;
      font-size: 22px;
      line-height: 1.2;
    }
    .article-content {
      margin-top: 15px;
    }
    img{
      width: auto;
      height: auto;
      max-width: 100%;
    }
    figcaption{
      font-style: italic;
    }
  }
}

.sponsors-container{
  padding: 20px;
  min-height: 120px;
}

figure.wp-block-embed-youtube{
  div.wp-block-embed__wrapper{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    iframe{
      position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }
  }
}

.has-text-align-center {
  text-align: center;
}

.has-text-align-right {
  text-align: right;
}


@media screen and (min-width: 1000px) {
  body {
    font-size: 20px;
  }

  main {
    max-width: 1000px;
  }

  h1 {
    font-size: 36px;
  }
  main article h1 {
    font-size: 28px;
  }

  figure {
    margin: 1em 120px;
  }

  #app.posts, #app.post, #app.page {
    main {
      article {
        padding: 60px;
        margin-bottom: 60px;
      }
    }
  }

  #app.pages {
    main {
      article {
        padding: 30px;
      }
    }
  }
}

</style>
