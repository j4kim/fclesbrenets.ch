import Vue from 'vue'
import Router from 'vue-router'
import Posts from './views/Posts.vue'
import Pages from './views/Pages.vue'
import Post from './views/Post.vue'
import Page from './views/Page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts,
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
      name: 'pages',
      component: Pages,
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
