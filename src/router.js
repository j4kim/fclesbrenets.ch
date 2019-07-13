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
      component: News
    },
    {
      path: '/news/:id',
      name: 'post',
      component: Article
    },
    {
      path: '/infos',
      name: 'infos',
      component: Infos
    },
    {
      path: '/infos/:slug',
      name: 'page',
      component: Article
    }
  ]
})
