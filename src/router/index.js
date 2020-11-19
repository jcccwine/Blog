import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/admin/home.vue'
import ArticleCreate from '../pages/admin/articleCreate.vue'
import ArticleList from '../pages/admin/articleList.vue'
import Tags from '../pages/admin/tags/tags.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: Home,
      children: [
        {path: '/articles/create', component: ArticleCreate, props: true},
        {path: '/articles/edit/:id', component: ArticleCreate, props: true},
        {path: '/articles/list', component: ArticleList},
        // {path: '/tags/edit/:id', component: Tags, props: true},
        {path: '/tags/tagsinit', component: Tags},
      ]
    
    }
  ]
})

export default router
