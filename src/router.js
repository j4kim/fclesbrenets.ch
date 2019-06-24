import Vue from 'vue'
import Router from 'vue-router'
import News from './views/News.vue'
import Infos from './views/Infos.vue'

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
      path: '/infos',
      name: 'infos',
      component: Infos
    }
  ]
})
