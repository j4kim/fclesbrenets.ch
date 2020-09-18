<template>
    <nav>
        <div @click="changePage('posts', 'left')">
            <span class="nav-link nav-posts">Actu</span>
            <footballer ref="footballer-pages"/>
        </div>
        <ball class="ball"/>
        <div @click="changePage('pages', 'right')">
            <footballer ref="footballer-posts" :revert="true"/> 
            <span class="nav-link nav-pages">Infos</span>
        </div>
    </nav>
</template>

<script>
import Footballer from '@/components/Footballer.vue'
import Ball from '@/components/Ball.vue'

export default {
  components: {Ball, Footballer},
  methods:{
    changePage(name, side){
      if(name !== this.$route.name){
        if(side !== this.$route.meta.side){
          this.$refs['footballer-'+name].kick()
        }
        this.$router.replace({name})
      }
    }
  }
}
</script>


<style lang="scss">
nav {
  max-width: 400px;
  margin: 30px auto;
  display: flex;  
  justify-content: space-between;
  align-items: baseline;

  .ball{
    flex: 1;
  }
}

.nav-link{
  color: transparentize(black, 0.5);
  transition: all 1s;
  padding: 0 10px;
  font-size:1.2em;
  cursor:pointer;
  user-select: none;
  display: inline-block;
  width: 70px;
}

.ball-left .nav-posts,
.ball-right .nav-pages{
  color: black;
}
</style>