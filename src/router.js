import Vue from 'vue'
import Router from 'vue-router'
import News from './views/News.vue'
import Infos from './views/Infos.vue'
import Article from './views/Article.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'news',
      component: News,
      meta:{side:'left'}
    },
    {
      path: '/news/:id',
      name: 'post',
      component: Article,
      meta:{side:'left'}
    },
    {
      path: '/infos',
      name: 'infos',
      component: Infos,
      meta:{side:'right'}
    },
    {
      path: '/infos/:slug',
      name: 'page',
      component: Article,
      meta:{side:'right'}
    }
  ]
})
