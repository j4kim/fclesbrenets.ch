import Vue from 'vue'
import Router from 'vue-router'
import Posts from './views/Posts.vue'
import Pages from './views/Pages.vue'
import Post from './views/Post.vue'
import Page from './views/Page.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts,
      meta: { side: 'left' }
    },
    {
      path: '/news/:id',
      name: 'post',
      component: Post,
      meta: { side: 'left' }
    },
    {
      path: '/infos',
      name: 'pages',
      component: Pages,
      meta: { side: 'right' }
    },
    {
      path: '/infos/:slug',
      name: 'page',
      component: Page,
      meta: { side: 'right' }
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  updateTitle (title) {
    let newTitle = "FC Les Brenets | " + title
    document.title = newTitle
    document.querySelector("meta[property='og:title']").content = newTitle
  }
})

router.afterEach((to, from) => {
  to.meta.previous = from
})

export default router