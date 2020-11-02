import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/admin/home.vue'
import ArticleCreate from '../pages/admin/articleCreate.vue'
import ArticleList from '../pages/admin/articleList.vue'
import TagCreate from '../pages/admin/tagCreate.vue'
import TagList from '../pages/admin/tagList.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: Home,
      children: [
        {path: '/articles/create', component: ArticleCreate},
        {path: '/articles/list', component: ArticleList},
        {path: '/tags/create', component: TagCreate},
        {path: '/tags/list', component: TagList},
      ]
    
    }
  ]
})

export default router
