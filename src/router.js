import Vue from 'vue'
import Router from 'vue-router'
import Posts from './views/Posts.vue'
import Pages from './views/Pages.vue'
import Post from './views/Post.vue'
import Page from './views/Page.vue'
import Sponsors from './views/Sponsors.vue'

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: Sponsors
    }
  ],
})

router.beforeEach((to, from, next) => {
  to.meta.previous = from
  next()
})

export default router