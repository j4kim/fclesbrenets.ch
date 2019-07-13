import Vue from 'vue'
import Router from 'vue-router'
import News from './views/News.vue'
import Infos from './views/Infos.vue'
import Post from './views/Post.vue'
import Page from './views/Page.vue'

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
      component: Post,
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
      component: Page,
      meta:{side:'right'}
    }
  ]
})
